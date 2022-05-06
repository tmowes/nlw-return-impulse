import { View, TouchableOpacity, Text, Image } from 'react-native'

import successImg from '../../../assets/success.png'
import { Copyright } from '../Copyright'
import { styles } from './styles'
import { FeedbackSuccessProps } from './types'

export function FeedbackSuccess(props: FeedbackSuccessProps) {
  const { onSendAnotherFeedback } = props
  return (
    <View style={styles.container}>
      <Image source={successImg} style={styles.image} />
      <Text style={styles.title}>Agradecemos o Feedback</Text>
      <TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>
      <Copyright />
    </View>
  )
}
