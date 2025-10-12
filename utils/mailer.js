const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  }
})

async function sendOtpEmail(to, otp) {
  const info = await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: to,
    subject: "Votre code de réinitialisation",
    text: `Votre code de réinitialisation est : ${otp}. Il expire dans 15 minutes,`,
    html: `<p>Votre code de réinitialisation est : <strong>${otp}</strong></p><p>Il expire dans 15 minutes.</p>`
  });
  return info;
}


module.exports = {sendOtpEmail, transporter};