import nodemailer from "nodemailer";

function getTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error(
      "EMAIL_USER and EMAIL_PASS must be set in .env. For Gmail, use an App Password (not your normal password)."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

/**
 * Send email. For Gmail: use App Password from
 * Google Account → Security → 2-Step Verification → App passwords.
 */
const sendEmail = async ({ to, subject, html }) => {
  const transporter = getTransporter();

  try {
    await transporter.sendMail({
      from: `"CampusHub" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log(`[Email] OTP sent to ${to}`);
  } catch (err) {
    console.error("[Email] Send failed:", err.message);

    // Helpful message for common Gmail auth errors
    if (
      err.message?.includes("Invalid login") ||
      err.message?.includes("authentication") ||
      err.code === "EAUTH"
    ) {
      throw new Error(
        "Email login failed. Use a Gmail App Password (Google Account → Security → 2-Step Verification → App passwords), not your normal password."
      );
    }

    throw err;
  }
};

export default sendEmail;
