import {
  sendBookingEmailToBusiness,
  sendBookingEmailToClient,
} from "@/lib/sendEmail";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      service,
      date,
      time,
      notes,
    } = data;

    const templateParams = {
      firstName: firstName || "",
      lastName: lastName || "",
      service: service || "",
      date: date || "",
      time: time || "",
      notes: notes || "",
      email: email || "",
      phone: phone || "",
      clientEmail: email || "", // actual target
    };

    // Send to business first
    await sendBookingEmailToBusiness(templateParams);

    // Send to client
    await sendBookingEmailToClient(templateParams);

    return Response.json({ success: true });

  } catch (error) {
    console.error("Booking creation failed:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
