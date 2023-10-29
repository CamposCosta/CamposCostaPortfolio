const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config({ path: 'info.env' });

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Ou outro host SMTP
  port: 587, // Ou outra porta
  secure: false, // true para 465, false para outras portas
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

function sendEmail(name, email, message) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'martaaferreiraa14@gmail.com', // Substitua pelo seu e-mail
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
 