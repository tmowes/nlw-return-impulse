import { FeedbackType } from '../WidgetButton/types'

export type FeedbackFormProps = {
  feedbackType: FeedbackType
  onFeedbackCanceled: () => void
  onFeedbackSend: () => void
}
