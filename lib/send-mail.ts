"use server";

import nodemailer from "nodemailer";

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: Number(SMTP_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export async function sendMail({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: `"Aloe Vera Shop" <${SMTP_USER}>`, // Šalje sa autentifikovanog naloga
      replyTo: email, // Reply-To je email pošiljaoca (korisnika ili sistema)
      to: sendTo || CONTACT_EMAIL,
      subject: subject,
      text: text,
      html: html ? html : "",
    });
    console.log("Message Sent", info.messageId);
    console.log("Mail sent to", sendTo || CONTACT_EMAIL);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    return null;
  }
}
