import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

function isRateLimited(ip: string) {
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const limit = 3;

    const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - record.lastReset > windowMs) {
        record.count = 0;
        record.lastReset = now;
    }

    if (record.count >= limit) {
        return true;
    }

    record.count++;
    rateLimitMap.set(ip, record);
    return false;
}

export async function POST(request: Request) {
    try {
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }
        const { name, organization, email, region, message, _honey } = await request.json();

        // Honeypot check for spam (silently fail)
        if (_honey) {
            console.log('Honeypot filled, rejecting spam submission.');
            return NextResponse.json({ success: true, message: 'Email sent successfully!' });
        }

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Configure transporter with Hostinger SMTP settings
        // These should be set in .env.local
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.hostinger.com',
            port: Number(process.env.SMTP_PORT) || 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Send notification email to admin
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: 'info@theanth.io',
            subject: `New Contact Submission: ${name} - ${organization || 'No Org'}`,
            text: `
        Name: ${name}
        Organization: ${organization}
        Email: ${email}
        Region: ${region}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Region:</strong> ${region}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
        });

        // Send acknowledgement email to user
        await transporter.sendMail({
            from: `"The ANTH Support" <${process.env.SMTP_USER}>`,
            to: email,
            subject: `Received: Your enquiry to The ANTH`,
            html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Enquiry Received</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #020617; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #cbd5e1;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 40px 20px; text-align: center;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #0f172a; border-radius: 16px; border: 1px solid #1e293b; overflow: hidden; text-align: left;">
                  
                  <!-- Header -->
                  <div style="padding: 30px 40px; border-bottom: 1px solid #1e293b; background: linear-gradient(to right, #0f172a, #1e293b);">
                    <h1 style="margin: 0; font-size: 20px; color: #fbbf24; text-transform: uppercase; letter-spacing: 0.1em;">The ANTH</h1>
                  </div>

                  <!-- Body -->
                  <div style="padding: 40px;">
                    <h2 style="margin-top: 0; color: #f8fafc; font-size: 24px;">Thank you for reaching out, ${name.split(' ')[0]}.</h2>
                    
                    <p style="color: #94a3b8; line-height: 1.6; font-size: 16px; margin-top: 20px;">
                      We have received your message regarding <strong>${organization || 'your organization'}</strong>.
                    </p>
                    
                    <p style="color: #94a3b8; line-height: 1.6; font-size: 16px;">
                      Our engineering team is reviewing your enquiry to understand how we can support your platform ambitions. We aim to respond to all qualified enquiries within 24-48 hours with next steps or clarifying questions.
                    </p>

                    <div style="margin-top: 30px; padding: 20px; background-color: #020617; border-radius: 8px; border-left: 3px solid #fbbf24;">
                      <p style="margin: 0; font-size: 14px; color: #cbd5e1;">
                        <strong>Your Message Context:</strong><br>
                        "${message.length > 100 ? message.substring(0, 100) + '...' : message}"
                      </p>
                    </div>
                  </div>

                  <!-- Footer -->
                  <div style="padding: 30px 40px; background-color: #020617; border-top: 1px solid #1e293b; font-size: 12px; color: #64748b;">
                    <p style="margin: 0;">
                      &copy; ${new Date().getFullYear()} The ANTH (Ananse Ntentan Technology Hub).<br>
                      Accra, Ghana &middot; Operating Pan-African
                    </p>
                    <p style="margin-top: 10px;">
                      <a href="https://theanth.io" style="color: #fbbf24; text-decoration: none;">theanth.io</a>
                    </p>
                  </div>

                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
        });

        return NextResponse.json({ success: true, message: 'Emails sent successfully!' });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
