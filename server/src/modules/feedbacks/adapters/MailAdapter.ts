import { SendMailDTO } from '../dtos/SendMailDTO'

export interface MailAdapter {
  sendMail: (data: SendMailDTO) => Promise<void>
}
