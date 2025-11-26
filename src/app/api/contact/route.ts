import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        const data = await resend.emails.send({
            from: 'Vertex Contact Form <onboarding@resend.dev>',
            // to: ['contact@vertex-ai.tech'],
            to: ["birehananteneh4@gmail.com"],
            replyTo: email,
            subject: `New Contact Form Submission: ${subject}`,
            text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
