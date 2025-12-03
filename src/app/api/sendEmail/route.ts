import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

// Crea el post para subir el mail
export async function POST(req: Request) {
    try {
        const { name, email, country, phone, company, message } = await req.json();

        // ** VERIFICAÇÃO CRÍTICA **
        const emailUser = process.env.EMAIL_USER;
        const emailPass = process.env.EMAIL_PASS;

        if (!emailUser || !emailPass) {
            console.error("Variáveis de ambiente EMAIL_USER ou EMAIL_PASS não definidas.");
            return NextResponse.json(
                { success: false, error: "Configuração do servidor de e-mail ausente." },
                { status: 500 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        const mailOptions = {
            from: emailUser,
            to: emailUser, // Enviando para o seu próprio e-mail
            subject: "Novo Contato Dentro do Portifolio",
            html: `
                <h2>Nova mensagem recebida do formulário:</h2>
                <p><strong>Nome</strong>: ${name}</p>
                <p><strong>Email</strong>: ${email}</p>
                <p><strong>País (Code)</strong>: ${country}</p>
                <p><strong>Telefone</strong>: ${phone}</p>
                <p><strong>Empresa</strong>: ${company || 'N/A'}</p>
                <p><strong>Mensagem</strong>: ${message}</p>
            `
        }

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        // MUDANÇA AQUI: Captura o erro detalhado e o envia para o console do servidor.
        console.error("Erro ao enviar email:", error.message || error);
        
        // Retorna uma mensagem genérica para o cliente, mas garante que o log no servidor seja útil.
        return NextResponse.json(
            { success: false, error: "Erro interno do servidor ao enviar e-mail. Consulte o log do servidor." },
            { status: 500 }
        );
    }
}