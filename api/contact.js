
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !message || !phone) {
    return res.status(400).json({ message: "Please fill in all the fields!" });
  }

  try {
    // Configure your mail transport
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // or your provider’s SMTP
      port: 465,
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // ignore error
        pass: process.env.EMAIL_PASS, // ignore error
      },
    });
    // Email content
    const mailOptions = {
      from: `"Alpha Signature Contact" <${process.env.EMAIL_USER}>`, // ignore error
      to: process.env.RECEIVER_EMAIL, // ignore error
      subject: `New message from ${firstName} ${lastName}`,
      html: `
        <h2>Contact Form Submission</h2>
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
