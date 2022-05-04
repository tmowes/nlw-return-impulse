import { Router } from 'express'

import { NodemailerMailAdapter } from '../modules/feedbacks/adapters/nodemailer/NodemailerMailAdapter'
import { PrismaFeedbackRepository } from '../modules/feedbacks/repositories/prisma/PrismaFeedbackRepository'
import { SubmitFeedbackUseCase } from '../modules/feedbacks/useCases/SubmitFeedbackUseCase'

export const routes = Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbackRepository = new PrismaFeedbackRepository()
  const nodemailerMailAdapter = new NodemailerMailAdapter()
  const submitFeedback = new SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter)

  await submitFeedback.execute({ type, comment, screenshot })

  return res.status(201).send()
})
