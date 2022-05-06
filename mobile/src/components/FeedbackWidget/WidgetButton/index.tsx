/* eslint-disable react/jsx-no-useless-fragment */
import { useRef, useState } from 'react'
import { TouchableOpacity } from 'react-native'

import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import { theme } from '@src/theme'

import { styles } from './styles'
import { FeedbackType } from './types'
import { FeedbackSuccess } from '../FeedbackSuccess'
import { FeedbackForm } from '../FeedbackForm'
import { FeedbackOptions } from '../FeedbackOptions'

function WidgetButton() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  const bottomSheetRef = useRef<BottomSheet>(null)

  const onOpen = () => {
    bottomSheetRef.current?.expand()
  }

  const onRestartFeedback = () => {
    setFeedbackType(null)
    setFeedbackSent(false)
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onOpen}>
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <FeedbackSuccess onSendAnotherFeedback={onRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <FeedbackForm
                feedbackType={feedbackType}
                onFeedbackCanceled={onRestartFeedback}
                onFeedbackSend={() => setFeedbackSent(true)}
              />
            ) : (
              <FeedbackOptions onFeedbackTypeChanged={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  )
}

export default gestureHandlerRootHOC(WidgetButton)
