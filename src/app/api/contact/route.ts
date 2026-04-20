import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { bandName, contactName, email, musicLink, socials, project } = body;

    if (!bandName || !contactName || !email || !project) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Backline Sites <sam@backlinesites.co.nz>',
      to: ['backlinesites@gmail.com'],
      replyTo: email,
      subject: `New project brief — ${bandName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
          <h1 style="font-size: 28px; margin-bottom: 8px;">New project brief</h1>
          <p style="color: #666; margin-bottom: 32px;">Submitted via backlinesites.co.nz</p>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; width: 140px;">Band / Artist</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${bandName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Contact name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            ${musicLink ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Music link</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="${musicLink}">${musicLink}</a></td>
            </tr>` : ''}
            ${socials ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600;">Socials / site</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; white-space: pre-wrap;">${socials}</td>
            </tr>` : ''}
          </table>

          <h2 style="font-size: 18px; margin-bottom: 12px;">Project description</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 4px; white-space: pre-wrap; line-height: 1.6;">
${project}
          </div>

          <p style="margin-top: 32px; color: #999; font-size: 13px;">
            Hit reply to respond directly to ${contactName}.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
