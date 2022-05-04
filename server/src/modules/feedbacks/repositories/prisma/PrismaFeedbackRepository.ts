import { prisma } from '../../../../prisma'
import { CreateFeedbackDTO } from '../../dtos/CreateFeedbackDTO'
import { FeedbackRepository } from '../FeedbacksRepository'

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: CreateFeedbackDTO) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    })
  }
}
