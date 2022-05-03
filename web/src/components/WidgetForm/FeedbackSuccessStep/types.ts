import { Dispatch, SetStateAction } from 'react'

import { FeedbackType } from '../FeedbackTypeStep/feedbackTypes'

export type FeedbackSuccessStepProps = {
  setFeedbackType: Dispatch<SetStateAction<FeedbackType | null>>
}
