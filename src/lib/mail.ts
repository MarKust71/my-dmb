import { Resend } from 'resend'

const resendApiKey = process.env.RESEND_API_KEY
const resend = new Resend(resendApiKey)

type SendMailProps = {
  from: string
  to: string | string[]
  subject: string
  html: string
}

export const sendMail = async ({ from, to, subject, html }: SendMailProps) => {
  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      // react: EmailTemplate({ firstName: 'John' }),
      html,
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
