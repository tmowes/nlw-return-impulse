import { Text, View } from 'react-native'

import WidgetButton from '@components/FeedbackWidget/WidgetButton'

import { styles } from './styles'

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
      <WidgetButton />
    </>
  )
}
