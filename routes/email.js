const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const moment = require('moment');
moment.locale('es');

let transporter = nodemailer.createTransport({
  host:"smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: 'telsat.clientes@gmail.com',
    pass: 'Telsatco12344321'
  }
});

router.post('/', (req, res) => {
  let message = req.body;
  let htmlAux = `  
    <header>
      <h1 style="text-align: center; color: black;">${message.company}</h1>
    </header>
    <section>
      <div>
        <p style="font-size: 18px; color: black;">
          <span style="font-weight: bold">Nombre: </span>
          ${message.name + ' ' + message.lastName}
        </p>
      </div>
      <div>
        <p style="font-size: 18px; color: black;">
          <span style="font-weight: bold">Correo: </span>
          ${message.email}
        </p>
      </div>
      <div style="color: black;">
        <h3>Mensaje: </h3>
        <p>${message.message}</p>
      </div>
    </section>
    <footer style="color: black;">
      <div style="text-align: center; color: black;">
        <time>${moment().locale(false).format('dddd, MMMM Do YYYY, h:mm:ss a')}<time>
      </div>
    </footer>`;
  
  let mailOptions = {
    from: '"Clientes" <telsat.clientes@gmail.com>',
    to: 'telsat.ingenieria@gmail.com',
    subject: 'Client request for information',
    text: `hola`,
  html: htmlAux
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error)
    }
    console.log('Message %s sent: %s', info.messageId, info.response)
  })    
  res.redirect('/');
})

module.exports = router;