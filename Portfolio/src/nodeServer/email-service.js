const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: "process.env" });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendEmail(name, email, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'martaaferreiraa14@gmail.com',
    subject: 'Contato do Portfólio',
    text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar o e-mail:', error);
    } else {
      console.log('E-mail enviado com sucesso:', info.response);
    }
  });
}

module.exports = { sendEmail };
