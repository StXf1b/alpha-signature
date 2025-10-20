
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Configure your mail transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your provider’s SMTP
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your app password
      },
    });
    // Email content
    const mailOptions = {
      from: `"Alpha Signature Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // where you want to receive messages
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ success: false, message: "Error sending email." });
  }
}
