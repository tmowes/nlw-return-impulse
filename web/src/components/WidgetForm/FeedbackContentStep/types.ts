import { Dispatch, SetStateAction } from 'react'

import { FeedbackType } from '../FeedbackTypeStep/feedbackTypes'

export type FeedbackContentStepProps = {
  feedbackType: FeedbackType
  onResetSteps: () => void
  onFeedbackSent: () => void
}
