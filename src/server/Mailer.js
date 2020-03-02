const express = require('express');
const router = express.Router();
const app = express();
const nodemailer = require('nodemailer');
const axios = require('axios');

/*

export const Mailer = ({ firstname, lastname, email }) => {
  app.post('/signupemail', (req, res) => {
    console.log(req.body);

    const output = `
<h2>Your Account Has been Succesfully created with follwing credentials</h2>
<ul>
<li>First Name: ${firstname}</li> 
<li>Last Name: ${lastname}</li> 
<li>Email: ${email}</li> 
</ul>
`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'milanchal12@gmail.com', // generated ethereal user
        pass: 'Starbucks$6' // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = {
      from: '"Travoscope Hotels®" <milanchal13@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'Greetings from Travoscope Hotels!', // Subject line
      html: output // html body
    };

    transporter.sendMail(info, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    res.send({ msg: 'Email has been sent' });
  });
};

export default Mailer;
*/

module.exports = router;
