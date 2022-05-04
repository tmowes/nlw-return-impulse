/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-empty-function */
import { SubmitFeedbackUseCase } from '.'

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

describe('Submit feedback', () => {
  const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy },
  )
  it('should be able to submit a feedback', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'data:image/png; base64test.jpg',
      }),
    ).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalledTimes(1)
    expect(sendMailSpy).toHaveBeenCalledTimes(1)
  })
  it('should not be able to submit a feedback without  type', async () => {
    await expect(
      submitFeedback.execute({
        type: '',
        comment: 'example comment',
        screenshot: 'data:image/png; base64test.jpg',
      }),
    ).rejects.toThrow()
  })
  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: '',
        screenshot: 'data:image/png; base64test.jpg',
      }),
    ).rejects.toThrow()
  })
  it('should not be able to submit a feedback with wrong screenshot format', async () => {
    await expect(
      submitFeedback.execute({
        type: 'BUG',
        comment: 'example comment',
        screenshot: 'wrong_format.jpg',
      }),
    ).rejects.toThrow()
  })
})
