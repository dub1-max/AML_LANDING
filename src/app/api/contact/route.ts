import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { email, subject, message } = data;

    // Configure transporter (using Gmail SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'businessspaces2@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD, // Use an App Password, not your main password
      },
    });

    const mailOptions = {
      from: email,
      to: 'businessspaces2@gmail.com',
      subject: subject || 'New Contact Form Submission',
      text: `From: ${email}\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 