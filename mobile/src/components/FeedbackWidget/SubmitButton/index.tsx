import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import { theme } from '@src/theme'

import { styles } from './styles'
import { SubmitButtonProps } from './types'

export function SubmitButton(props: SubmitButtonProps) {
  const { isLoading, ...rest } = props
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  )
}
