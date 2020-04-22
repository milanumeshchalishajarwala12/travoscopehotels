const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../Models/User');
const nodemailer = require('nodemailer');
const cors = require('cors');

router.use(cors());

router.post(
  '/',

  [],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        firstname,
        lastname,
        email,
        password,
        phone,
        status = 'Silver',
        loyalityPoints = 100,
      } = req.body;

      let userEmail = await User.findOne({ email });
      if (userEmail) {
        return res.status(400).json({ msg: 'Invalid Credential' });
      }

      user = new User({
        firstname,
        lastname,
        email,
        phone,
        password,
        status: 'Silver',
        loyalityPoints: 100,
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 3600000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // Send Email

      const output = `
      <p style={{ fontFamily: 'Times New Roman', fontSize: '1.3rem' }}>
      Hello ${firstname},
    </p>

    <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
      Welcome Onboard.
    </p>

    <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
      We are Pleased to Welcome you to the Family.
    </p>

    <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
      You are now a Member of the Silver Club at Travoscope Hotels.
    </p>

    <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
      As a compliment, we are Rewarding you ${loyalityPoints} Loyality Points.
    </p>
    <br />

    <p style={{ fontFamily: 'Times New Roman', fontSize: '1.1rem' }}>
      We Hope You Have a great Journey with Travoscope Hotels!
    </p>
        `;
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'milanchal12@gmail.com', // generated ethereal user
          pass: 'Starbucks$6', // generated ethereal password
        },
      });

      // send mail with defined transport object
      let info = {
        from: '"Travoscope Hotels®" <milanchal12@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'Greetings from Travoscope Hotels!', // Subject line
        html: output, // html body
      };

      transporter.sendMail(info, (error, info) => {
        if (error) {
          console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      });

      res.send({ msg: 'Email has been sent' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.post('/askqn', async (req, res) => {
  try {
    const { fullname, email, message } = req.body;
    const output = `
       <h2 style={{display:"inline-block"}}>Email: </h2><p style={{display:"inline-block"}}>${email}</p>
       <h2 style={{display:"inline-block"}}>Name: </h2><p style={{display:"inline-block"}}>${fullname}</p>
       <h2 style={{display:"inline-block"}}>Message: </h2><p style={{display:"inline-block"}}>${message}</p>

        `;
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'milanchal12@gmail.com', // generated ethereal user
        pass: 'Starbucks$6', // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = {
      from: '"Travoscope Hotels®" <milanchal12@gmail.com>', // sender address
      to: 'mchal4@unh.newhaven.edu', // list of receivers
      subject: `Question from ${fullname}`, // Subject line
      html: output, // html body
    };

    transporter.sendMail(info, (error, info) => {
      if (error) {
        console.log(error);
      }
      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });

    res.send({ msg: 'Email has been sent' });
  } catch (err) {
    console.log(err.message);
    res.status(400).send(err.message);
  }
});

module.exports = router;
