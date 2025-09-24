import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, brand, email, phone, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail", // Or SMTP provider
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `📩 New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Brand: ${brand || "N/A"}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email" }),
      { status: 500 }
    );
  }
}
