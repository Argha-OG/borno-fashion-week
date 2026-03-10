import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Validation (basic)
        if (!name || !email || !phone) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: 'smtpout.secureserver.net',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `New Form Submission: Borneo Fashion Week`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                    <h2 style="color: #c5a059;">New Application Details</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
                    <hr style="border: none; border-top: 1px solid #c5a059; margin: 20px 0;">
                    <p style="font-size: 12px; color: #888;">This email was sent from the Borneo Fashion Week website.</p>
                </div>
            `,
        };

        // Send email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: %s', info.messageId);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('SMTP Error details:', error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
