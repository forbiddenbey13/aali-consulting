import { access } from "fs";

export async function sendBookingEmailToBusiness(templateParams: any) {
  return sendEmail({
    ...templateParams,
    to_email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL,  // send to you
  });
}

export async function sendBookingEmailToClient(templateParams: any) {
  return sendEmail({
    ...templateParams,
    to_email: templateParams.clientEmail, // send to client
  });
}

async function sendEmail(templateParams: any) {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      console.error("Missing EmailJS variables:", {
        serviceId,
        templateId,
        publicKey,
        privateKey,
      });
      throw new Error("EmailJS configuration error");
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${privateKey}`, // REQUIRED FOR STRICT MODE
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: templateParams,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("EmailJS error:", err);
      throw new Error("Failed to send email");
    }

    return true;
  } catch (err) {
    console.error("Email sending failed:", err);
    return false;
  }
}
