import { Image, TouchableOpacity, View } from 'react-native'

import { theme } from '@src/theme'
import { Camera, Trash } from 'phosphor-react-native'

import { ScreenshotButtonProps } from './types'
import { styles } from './styles'

export function ScreenshotButton(props: ScreenshotButtonProps) {
  const { screenshot, onTakeShot, onRemoveShot } = props
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <View>
          <Image source={{ uri: screenshot }} style={styles.image} />
          <Trash
            size={22}
            color={theme.colors.text_secondary}
            weight="fill"
            style={styles.removeIcon}
          />
        </View>
      ) : (
        <Camera size={24} color={theme.colors.text_secondary} weight="bold" />
      )}
    </TouchableOpacity>
  )
}
