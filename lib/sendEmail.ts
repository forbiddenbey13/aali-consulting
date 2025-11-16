export async function sendBookingEmail(templateParams: any) {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;   // REQUIRED
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;  // OPTIONAL (strict mode)

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables:", {
        serviceId,
        templateId,
        publicKey,
        privateKey
      });
      throw new Error("EmailJS configuration error");
    }

    const body: any = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,         // REQUIRED ALWAYS
      template_params: templateParams,
    };

    if (privateKey) {
      body.accessToken = privateKey;  // If exists, EmailJS uses strict mode
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS error:", errorText);
      throw new Error("Failed to send confirmation email");
    }

    return true;

  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}
