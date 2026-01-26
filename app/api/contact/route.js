import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'mmcreacion.contacto@gmail.com',
                pass: process.env.GMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: 'mmcreacion.contacto@gmail.com',
            to: 'mmcreacion.contacto@gmail.com',
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: `
        Has recibido un nuevo mensaje desde el formulario de contacto web:

        Nombre: ${name}
        Email/WhatsApp: ${email}
        
        Mensaje:
        ${message}
      `,
            html: `
        <h3>Nuevo mensaje de contacto web</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email/WhatsApp:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email enviado con éxito' }, { status: 200 });
    } catch (error) {
        console.error('Error enviando email:', error);
        return NextResponse.json({ error: 'Error enviando el email' }, { status: 500 });
    }
}
