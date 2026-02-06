import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Here you would typically send an email using a service like Resend
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData);

    // If you have Resend configured, uncomment and use this:
    /*
    if (process.env.RESEND_API_KEY) {
      const { Resend } = require('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'Porca-Ria Website <noreply@porca-ria.pt>',
        to: process.env.CONTACT_EMAIL || 'contato@porca-ria.com.br',
        subject: `Novo Contacto: ${validatedData.subject}`,
        html: `
          <h2>Nova mensagem de contacto</h2>
          <p><strong>Nome:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          ${validatedData.phone ? `<p><strong>Telefone:</strong> ${validatedData.phone}</p>` : ''}
          <p><strong>Assunto:</strong> ${validatedData.subject}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${validatedData.message}</p>
        `,
      });
    }
    */

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Dados inválidos' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: 'Erro ao enviar mensagem' },
      { status: 500 }
    );
  }
}
