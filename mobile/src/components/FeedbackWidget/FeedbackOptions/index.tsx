import { Text, View } from 'react-native'

import { feedbackTypes } from '@utils/feedbackTypes'

import { Copyright } from '../Copyright'
import { FeedbackType } from '../WidgetButton/types'
import { styles } from './styles'
import { FeedbackOptionsProps } from './types'
import { Option } from './Option'

export function FeedbackOptions(props: FeedbackOptionsProps) {
  const { onFeedbackTypeChanged } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>
      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
          />
        ))}
      </View>
      <Copyright />
    </View>
  )
}
