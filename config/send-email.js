const nodemailer = require('nodemailer');
const config = require('./config');

module.exports = sendEmail;

async function sendEmail({ to, subject, html, from = config.development.smtpOptions.emailFrom }) {
    console.log("\n first \n")
    const transporter = nodemailer.createTransport(config.smtpOptions);
    await transporter.sendMail({ from, to, subject, html });
}