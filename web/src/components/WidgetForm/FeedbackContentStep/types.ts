import { Dispatch, SetStateAction } from 'react'

import { FeedbackType } from '../FeedbackTypeStep/feedbackTypes'

export type FeedbackContentStepProps = {
  feedbackType: FeedbackType
  setFeedbackType: Dispatch<SetStateAction<FeedbackType | null>>
  onFeedbackSent: () => void
}
