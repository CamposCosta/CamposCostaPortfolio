const express = require('express');
const bodyParser = require('body-parser');
const { sendEmail } = require('./email-service');
const cors = require('cors'); // Importe o pacote 'cors'.

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:4200', // Substitua pelo endereço do seu aplicativo Angular.
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

// Defina a rota para enviar email
app.post('/send-email', (req, res) => {
  console.log('Recebida uma solicitação para /send-email');
  const { name, email, message } = req.body;
  sendEmail(name, email, message);
  res.status(200).json({ message: 'E-mail enviado com sucesso!' });
});

app.listen(3000, () => {
  console.log('Servidor está na porta 3000');
});
