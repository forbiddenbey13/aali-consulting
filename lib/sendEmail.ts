// lib/sendEmail.ts
import nodemailer from "nodemailer";

// Configure the email transporter
// For Personal Outlook/Hotmail accounts
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

// --- EMAIL DESIGN CONSTANTS ---
// Change this to your live domain once deployed (e.g., "https://www.yourdomain.com/logo.png")
// For local testing with Ngrok, use your Ngrok URL.
const LOGO_URL = "http://localhost:3000/logo.png";
const PRIMARY_BLUE = "#54b3f0"; 
const BRAND_BLACK = "#000000";

// --- FUNCTIONS ---

export async function sendBookingEmailToBusiness(params: any) {
  const { firstName, lastName, email, phone, service, date, time, platform, notes, whoAreYou, companyName } = params;

  const htmlContent = `
    <div style="background-color: #f4f7f6; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <div style="background-color: ${BRAND_BLACK}; text-align: center; padding: 30px 20px;">
          <img src="${LOGO_URL}" alt="Aali Consulting" style="max-width: 220px; height: auto;" />
        </div>
        
        <div style="padding: 40px 30px; color: #333333;">
          <h2 style="color: ${PRIMARY_BLUE}; margin-top: 0; font-size: 24px;">New Consultation Request</h2>
          <p style="font-size: 16px; line-height: 1.6;">You have received a new booking request for a 30-minute consultation.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
            <tr>
              <td colspan="2" style="background-color: #f9f9f9; padding: 15px; font-weight: bold; border-radius: 6px 6px 0 0; border-bottom: 2px solid ${PRIMARY_BLUE};">Booking Details</td>
            </tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Service:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${service}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Date:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${date}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Time:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${time}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Platform:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${platform}</td></tr>
          </table>

          <table style="width: 100%; border-collapse: collapse; margin-top: 25px;">
            <tr>
              <td colspan="2" style="background-color: #f9f9f9; padding: 15px; font-weight: bold; border-radius: 6px 6px 0 0; border-bottom: 2px solid ${PRIMARY_BLUE};">Client Details</td>
            </tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Name:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${firstName} ${lastName}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Email:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${email}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Phone:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${phone || "Not provided"}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Company:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${companyName || "Not provided"}</td></tr>
            <tr><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;"><strong>Profile:</strong></td><td style="padding: 10px 15px; border-bottom: 1px solid #eeeeee;">${whoAreYou || "Not provided"}</td></tr>
          </table>
          
          <div style="margin-top: 25px; background-color: #fffbdd; padding: 15px; border-left: 4px solid #fce34b; border-radius: 4px;">
            <strong>Additional Notes:</strong><br/>
            <p style="margin-top: 5px; margin-bottom: 0;">${notes || "No notes provided."}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Aali Consulting" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
    subject: `New Booking: ${service} with ${firstName} ${lastName}`,
    html: htmlContent,
  });
}

export async function sendBookingEmailToClient(params: any) {
  const { firstName, service, date, time, platform, clientEmail } = params;

  const htmlContent = `
    <div style="background-color: #f4f7f6; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <div style="background-color: ${BRAND_BLACK}; text-align: center; padding: 30px 20px;">
          <img src="${LOGO_URL}" alt="Aali Consulting" style="max-width: 220px; height: auto;" />
        </div>
        
        <div style="padding: 40px 30px; color: #333333;">
          <h2 style="color: ${PRIMARY_BLUE}; margin-top: 0; font-size: 24px;">Booking Confirmed</h2>
          <p style="font-size: 16px; line-height: 1.6;">Hi ${firstName},</p>
          <p style="font-size: 16px; line-height: 1.6;">Thank you for booking with us! This email confirms that your consultation has been successfully scheduled.</p>
          
          <div style="background-color: #f9f9f9; padding: 25px; border-radius: 8px; margin: 30px 0; border: 1px solid #eeeeee; border-left: 4px solid ${PRIMARY_BLUE};">
            <h3 style="margin-top: 0; color: #1a1a1a;">Your Appointment Details</h3>
            <p style="margin: 8px 0;"><strong>Service:</strong> ${service}</p>
            <p style="margin: 8px 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 8px 0;"><strong>Time:</strong> ${time}</p>
            <p style="margin: 8px 0;"><strong>Platform:</strong> ${platform}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">We look forward to speaking with you soon. If you need to reschedule or have any questions, simply reply directly to this email.</p>
          
          <p style="font-size: 16px; margin-top: 30px; line-height: 1.6;">Best regards,<br/>
          <strong style="color: ${BRAND_BLACK};">Aali Consulting</strong></p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; text-align: center; color: #888888; font-size: 12px; border-top: 1px solid #eeeeee;">
          &copy; ${new Date().getFullYear()} Aali Consulting. All rights reserved.
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Aali Consulting" <${process.env.EMAIL_USER}>`,
    to: clientEmail,
    subject: `Booking Confirmation: ${service} on ${date}`,
    html: htmlContent,
  });
}

export async function sendCancellationEmail(params: any) {
  const { firstName, service, date, time, clientEmail } = params;

  const htmlContent = `
    <div style="background-color: #f4f7f6; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        
        <div style="background-color: ${BRAND_BLACK}; text-align: center; padding: 30px 20px;">
          <img src="${LOGO_URL}" alt="Aali Consulting" style="max-width: 220px; height: auto;" />
        </div>
        
        <div style="padding: 40px 30px; color: #333333;">
          <h2 style="color: #e74c3c; margin-top: 0; font-size: 24px;">Booking Cancelled</h2>
          <p style="font-size: 16px; line-height: 1.6;">Hi ${firstName},</p>
          <p style="font-size: 16px; line-height: 1.6;">This email is to confirm that your consultation has been successfully cancelled.</p>
          
          <div style="background-color: #fff5f5; padding: 25px; border-radius: 8px; margin: 30px 0; border: 1px solid #ffebeb; border-left: 4px solid #e74c3c;">
            <h3 style="margin-top: 0; color: #1a1a1a;">Cancelled Details</h3>
            <p style="margin: 8px 0;"><strong>Service:</strong> ${service}</p>
            <p style="margin: 8px 0;"><strong>Date:</strong> ${date}</p>
            <p style="margin: 8px 0;"><strong>Time:</strong> ${time}</p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6;">If this was a mistake or you would like to reschedule, please feel free to book a new time on our website.</p>
          
          <p style="font-size: 16px; margin-top: 30px; line-height: 1.6;">Best regards,<br/>
          <strong style="color: ${BRAND_BLACK};">Aali Consulting</strong></p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 20px; text-align: center; color: #888888; font-size: 12px; border-top: 1px solid #eeeeee;">
           &copy; ${new Date().getFullYear()} Aali Consulting. All rights reserved.
        </div>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"Aali Consulting" <${process.env.EMAIL_USER}>`,
    to: clientEmail,
    subject: `Booking Cancelled: ${service} on ${date}`,
    html: htmlContent,
  });
}