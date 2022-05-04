import nodemailer from 'nodemailer'

import { SendMailDTO } from '../../dtos/SendMailDTO'
import { MailAdapter } from '../MailAdapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '913d10bb3a1ee2',
    pass: 'd56104e6d5bcf5',
  },
})
export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailDTO) {
    await transport.sendMail({
      from: 'Equipe PikTew <contact@piktew.com.br>',
      to: 'Julio Cesar Mowes <t-mowes@hotmail.com>',
      subject,
      html: body,
    })
  }
}
