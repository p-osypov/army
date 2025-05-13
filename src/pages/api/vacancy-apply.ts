import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function vacancyApply(
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
    const auth = {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    };
    if (!auth.user || !auth.pass) {
      return res.status(500).json({ message: "Email credentials aren't set." });
    }
    const transporter = nodemailer.createTransport({
      // For example, using Gmail:
      service: 'gmail',
      auth,
    });

    // 3. Configure the email data
    const mailPayload = {
      from: '"Chornyi Stryzh" <noreply@chornyi-stryzh.army>',
      to: 'chornyistryzh@gmail.com', // the address to send to
      subject: `Нова заявка на ${vacancy} від ${fullName}`,
      html: `
        <h2>Нова заявка з сайту</h2>
        <p><strong>ПІБ:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email || '<i>не вказано</i>'}</p>
        <p><strong>Телефон:</strong> ${phone || '<i>не вказано</i>'}</p>
        <p><strong>Вакансія:</strong> ${vacancy}</p>
        <p><strong>Коментар:</strong><br>${message?.replace(/\n/g, '<br>') || '<i>не вказано</i>'}</p>
        <hr>
        <p style="font-size: 12px; color: #666;">Цей лист надіслано з сайту chornyi-stryzh.army</p>
      `,
    };

    // 4. Send the email

    const mailPersonPayload = {
      from: '"Chornyi Stryzh" <noreply@chornyi-stryzh.army>',
      to: email,
      subject: 'Дякуємо за вашу заявку!',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h2 style="color: #222;">Дякуємо, ${fullName}!</h2>
        <p>Ми отримали вашу заявку на позицію <strong>${vacancy}</strong>.</p>
  
        <p>Наша команда розгляне вашу заявку найближчим часом.</p>
  
        <p><strong>Дані вашої заявки:</strong></p>
        <ul>
          <li><strong>ПІБ:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Телефон:</strong> ${phone || 'не вказано'}</li>
          <li><strong>Вакансія:</strong> ${vacancy}</li>
          <li><strong>Коментар:</strong> ${message?.replace(/\n/g, '<br>') || 'не вказано'}</li>
        </ul>
  
        <p>Якщо у вас є додаткові питання, ви завжди можете зв'язатися з нами, просто відповівши на цей лист.</p>
  
        <p style="margin-top: 30px;">З повагою,<br>
        Команда <strong>Чорний Стриж</strong></p>
  
        <hr style="margin-top: 40px;">
        <p style="font-size: 12px; color: #999;">Цей лист згенеровано автоматично. Будь ласка, не відповідайте на нього, якщо це не потрібно.</p>
      </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(mailPayload),
      transporter.sendMail(mailPersonPayload),
    ]);
    // 5. Respond with success
    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email.' });
  }
}
