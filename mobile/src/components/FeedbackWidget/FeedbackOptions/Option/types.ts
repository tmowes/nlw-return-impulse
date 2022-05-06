import { ImageProps, TouchableOpacityProps } from 'react-native'

export type OptionProps = TouchableOpacityProps & {
  title: string
  image: ImageProps
}
