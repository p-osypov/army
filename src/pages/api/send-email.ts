import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // 1. Parse data from request body
  const { fullName, email, phone, vacancy, message } = req.body;

  try {
    // 2. Create a transporter
    const transporter = nodemailer.createTransport({
      // For example, using Gmail:
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // e.g. "youremail@gmail.com"
        pass: process.env.EMAIL_PASS, // e.g. "yourGmailAppPassword"
      },
    });

    // 3. Configure the email data
    const mailOptions = {
      from: '"Chornyi Stryzh" <noreply@chornyi-stryzh.army>',
      to: 'osypovpavel@gmail.com', // the address to send to
      subject: `Нова заявка від ${fullName}`,
      text: `
        ПІБ: ${fullName}
        Email: ${email}
        Тел: ${phone}
        Вакансія: ${vacancy}
        Коментар: ${message}
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    // 5. Respond with success
    return res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email', error });
  }
}
