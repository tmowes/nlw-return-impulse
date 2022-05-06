import { Image, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import { OptionProps } from './types'

export function Option(props: OptionProps) {
  const { title, image, ...rest } = props
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}
