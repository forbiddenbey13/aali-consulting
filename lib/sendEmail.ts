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

// NOTE: If you are using a Business/Corporate Microsoft 365 account, 
// change the host to "smtp.office365.com" instead.

export async function sendBookingEmailToBusiness(params: any) {
  const { firstName, lastName, email, phone, service, date, time, platform, notes, whoAreYou, companyName } = params;

  // Build the email content for the business
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #0056b3;">New Consultation Request</h2>
      <p>You have received a new booking request for a 30-minute consultation.</p>
      
      <h3>Booking Details:</h3>
      <ul>
        <li><strong>Service:</strong> ${service}</li>
        <li><strong>Date:</strong> ${date}</li>
        <li><strong>Time:</strong> ${time}</li>
        <li><strong>Platform:</strong> ${platform}</li>
      </ul>
      
      <h3>Client Details:</h3>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone || "Not provided"}</li>
        <li><strong>Company:</strong> ${companyName || "Not provided"}</li>
        <li><strong>Role/Profile:</strong> ${whoAreYou || "Not provided"}</li>
      </ul>
      
      <h3>Additional Notes:</h3>
      <p>${notes || "No notes provided."}</p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Aali Consulting" <${process.env.EMAIL_USER}>`,
    to: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,
    subject: `New Booking: ${service} with ${firstName} ${lastName}`,
    html: htmlContent,
  });
}

export async function sendBookingEmailToClient(params: any) {
  const { firstName, service, date, time, platform, clientEmail } = params;

  // Build the email content for the client
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #0056b3;">Booking Confirmation</h2>
      <p>Hi ${firstName},</p>
      <p>Thank you for booking with us! This email confirms that your 30-minute consultation has been successfully scheduled.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Your Booking Details:</h3>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
          <li><strong>Platform:</strong> ${platform}</li>
        </ul>
      </div>
      
      <p>We look forward to speaking with you soon. If you need to reschedule or have any questions, please reply directly to this email.</p>
      <br />
      <p>Best regards,</p>
      <p><strong>Aali Consulting</strong></p>
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

  // Build the cancellation email content
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2 style="color: #d9534f;">Booking Cancelled</h2>
      <p>Hi ${firstName},</p>
      <p>This email is to confirm that your 30-minute consultation has been cancelled.</p>
      
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3>Cancelled Booking Details:</h3>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Date:</strong> ${date}</li>
          <li><strong>Time:</strong> ${time}</li>
        </ul>
      </div>
      
      <p>If this was a mistake or you would like to reschedule, please feel free to book a new time on our website.</p>
      <br />
      <p>Best regards,</p>
      <p><strong>Aali Consulting</strong></p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Aali Consulting" <${process.env.EMAIL_USER}>`,
    to: clientEmail,
    subject: `Booking Cancelled: ${service} on ${date}`,
    html: htmlContent,
  });
}