import { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { captureScreen } from 'react-native-view-shot'
import * as FileSystem from 'expo-file-system'
import { ArrowLeft } from 'phosphor-react-native'
import { theme } from '@src/theme'

import { feedbackTypes } from '@utils/feedbackTypes'
import { api } from '@services/api'

import { ScreenshotButton } from '../ScreenshotButton'
import { styles } from './styles'
import { FeedbackFormProps } from './types'
import { SubmitButton } from '../SubmitButton'

export function FeedbackForm(props: FeedbackFormProps) {
  const { feedbackType, onFeedbackSend, onFeedbackCanceled } = props
  const [screenshot, setScreenshot] = useState<string | null>(null)
  const [isSendingFeedback, setIsSendingFeedback] = useState(false)
  const [comment, setComment] = useState('')

  const feedbackTypeInfo = feedbackTypes[feedbackType]

  const onTakeScreenshot = () => {
    captureScreen({
      format: 'png',
      quality: 0.8,
    })
      .then((uri) => setScreenshot(uri))
      .catch((err) => console.log(err))
  }

  const onSendFeedback = async () => {
    if (isSendingFeedback) {
      return
    }

    setIsSendingFeedback(true)

    const screenshotBase64 =
      screenshot && FileSystem.readAsStringAsync(screenshot, { encoding: 'base64' })

    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      })

      onFeedbackSend()
    } catch (error) {
      console.log(error)
      setIsSendingFeedback(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft size={24} weight="bold" color={theme.colors.text_secondary} />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.stroke}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          screenshot={screenshot}
          onTakeShot={onTakeScreenshot}
          onRemoveShot={() => setScreenshot(null)}
        />
        <SubmitButton isLoading={isSendingFeedback} onPress={onSendFeedback} />
      </View>
    </View>
  )
}
