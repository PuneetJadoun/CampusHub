/*
 * Test if email sending works. Run from backend folder:
 *   node scripts/test-email.js
 *   node scripts/test-email.js yourname@bennett.edu.in
 * Requires .env with EMAIL_USER and EMAIL_PASS (Gmail App Password).
 */
import dotenv from "dotenv";
dotenv.config();

const sendEmail = (await import("../src/utils/sendEmail.util.js")).default;

const to = process.argv[2] || process.env.EMAIL_USER;
if (!to) {
  console.error("Usage: node scripts/test-email.js [recipient@email.com]");
  console.error("Or set EMAIL_USER in .env to send to yourself.");
  process.exit(1);
}

console.log("Sending test email to:", to);
try {
  await sendEmail({
    to,
    subject: "CampusHub – test email",
    html: "<p>If you see this, email is working.</p>",
  });
  console.log("Success! Check inbox (and spam) for:", to);
} catch (err) {
  console.error("Failed:", err.message);
  process.exit(1);
}


