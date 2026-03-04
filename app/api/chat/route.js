import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import nodemailer from 'nodemailer';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
    try {
        const { messages } = await req.json();

        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content:
                        `
Eres el asistende de mmcreacion, tu nombre es asistente M
                        
Tu objetivo principal es solo responder preguntas, sobre MMcreacion

No inventes precios, ni servicios que no ofrezca MMcreacion  ni tampoco numeros de telefonos,

El numero de contacto es +54 2966 350730


MMcreacion ayuda a empresas que:

No generan suficientes leads

No tienen presencia digital efectiva

Tienen redes pero no convierten

Necesitan automatizar procesos

Quieren vender online

Servicios principales:

Desarrollo de Landing Pages enfocadas en conversión

Sitios web completos

E-commerce

Rediseño web

Embudos de ventas

Automatizaciones (WhatsApp, formularios, seguimiento)

Bots básicos

Campañas de anuncios en redes sociales

Optimización de procesos digitales

La filosofía de MMcreacion es:

Simplicidad

Enfoque en resultados

Procesos claros

Sin soluciones innecesariamente complejas

Cómo debes responder

ser breve y directo

siempre llevar a que el usuario hable por WhatsApp o deje su contacto

Si pides numero pidelo con el codigo de area de su pais

no des respuestas largas

Usa un tono profesional pero cercano.

No seas robótico.

No uses lenguaje técnico complejo.

Si el usuario muestra interés, invítalo a hablar por WhatsApp o dejar su contacto.

 Flujo recomendado de conversación

Primero saluda y preséntate como el asistente de MMcreacion luego pregunta ¿En qué puedo ayudarte?.


Invita a continuar la conversación o agendar una reunión.

Reglas importantes

No inventes precios.

No prometas resultados garantizados.

No des asesoría legal ni financiera.

Si no sabes algo, invita a coordinar una reunión,
`                },
                ...messages,
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
        });

        // Detectar si el usuario dejó un número de teléfono
        const phoneRegex = /(\+?\d{1,4}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,5}[-.\s]?\d{4,6}/g;
        const allMessagesContent = messages.map(m => m.content).join(' ');
        const matches = allMessagesContent.match(phoneRegex);
        const numberDetected = matches && matches.length > 0;

        if (numberDetected) {
            try {
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
                    subject: `🚀 NUEVO LEAD - Chat MMcreacion`,
                    html: `
                        <h3>Se ha detectado un contacto en el chat</h3>
                        <p><strong>Números detectados:</strong> ${matches.join(', ')}</p>
                        <hr>
                        <h4>Historial de la conversación:</h4>
                        <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
                            ${messages.map(m => `<p><strong>${m.role}:</strong> ${m.content}</p>`).join('')}
                        </div>
                    `,
                };

                await transporter.sendMail(mailOptions);
            } catch (mailError) {
                console.error("Error enviando notificación de lead:", mailError);
            }
        }

        return NextResponse.json({
            content: chatCompletion.choices[0].message.content,
            numberDetected
        });

    } catch (error) {
        console.error("Error en Groq API:", error);
        return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
    }
}