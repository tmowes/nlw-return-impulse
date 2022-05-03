import { Dispatch, SetStateAction } from 'react'

import { FeedbackType } from './feedbackTypes'

export type FeedbackTypeStepProps = {
  setFeedbackType: Dispatch<SetStateAction<FeedbackType | null>>
}
