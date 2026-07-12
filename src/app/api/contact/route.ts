import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Remplace les sauts de ligne par des <br> pour l'HTML
    const formattedMessage = message
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\n/g, "<br>");

    const data = await resend.emails.send({
      from: "ITS Agency <onboarding@resend.dev>",
      to: ["itsagency.bj@gmail.com"],
      subject: `[Contact ITS] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="background: #1F7A4D; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 18px;">📧 Nouveau message de contact</h2>
          </div>
          <div style="background: #f9f9f9; padding: 25px;">
            <div style="background: white; padding: 20px; border-radius: 6px; border-left: 4px solid #1F7A4D;">
              <p style="line-height: 1.8; color: #333; margin: 0;">
                ${formattedMessage}
              </p>
            </div>
          </div>
          <div style="background: #0B1F3A; color: white; padding: 15px; text-align: center; font-size: 12px;">
            <p style="margin: 0;">ITS Agency — E-commerce International Sécurisé</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}