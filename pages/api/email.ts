import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

const sendEmail = async (
  req: NextApiRequest,
  res: NextApiResponse
  ) => {
  const msg = {
    to: 'chasefarmer94@gmail.com',
    from: 'chasefarmer94@gmail.com',
    subject: 'test subject',
    text: 'test test test'
  }

  await sendgrid.send(msg);

  return res.status(200).json({error: ""});
}

export default sendEmail;