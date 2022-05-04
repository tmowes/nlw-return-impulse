import { CreateFeedbackDTO } from '../dtos/CreateFeedbackDTO'

export interface FeedbackRepository {
  create: (data: CreateFeedbackDTO) => Promise<void>
}
