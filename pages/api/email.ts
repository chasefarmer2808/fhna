import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { FormValues } from '../../components/ContactForm';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, subject, message } = req.body as FormValues;
  const msg = {
    to: 'chasefarmer94@gmail.com',
    from: 'chasefarmer94@gmail.com',
    subject: 'FHNA Contact Form Submission',
    text: generateEmailBody(name, email, subject, message),
  };

  try {
    await sendgrid.send(msg);
    return res.status(200).json({ error: '' });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
};

const generateEmailBody = (
  senderName: String,
  senderEmail: String,
  subject: String,
  message: String
) => {
  return `
    From: ${senderName} <${senderEmail}>
    Subject: ${subject}

    Message Body:
    ${message}

    --
    This email was sent via the contact form on the official FHNA website.
  `;
};

export default sendEmail;
