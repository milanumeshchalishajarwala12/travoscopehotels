const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../Models/User');
const nodemailer = require('nodemailer');
const cors = require('cors');

//const twilio = require('twilio');
//const accountSid = 'ACe490e036e98d9904268454eecfc9c8be';
//const authToken = '73491b0715592a05e90986dcee4634d0';
//const client = new twilio(accountSid, authToken);

router.use(cors());

router.post(
  '/',

  [
    check('firstname', 'First name is required')
      .not()
      .isEmpty(),
    check('email', 'Valid email is required').isEmail(),
    check(
      'password',
      'Pleae enter a password with 6 or more character'
    ).isLength({ min: 8 }),
    check('phone', 'Enter valid phone number')
      .not()
      .isEmpty()
      .isLength({ max: 10, min: 10 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { firstname, lastname, email, password, phone } = req.body;

      let user = await User.findOne({ email, phone });
      if (user) {
        return res.status(400).json({ msg: 'Invalid Credential' });
      }

      user = new User({
        firstname,
        lastname,
        email,
        phone,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      // Send Email

      const output = `
        <h2>Your Account Has been Succesfully created with follwing credentials</h2>
        <ul>
        <li>First Name: ${firstname}</li> 
        <li>Last Name: ${lastname}</li> 
        <li>Email: ${email}</li> 
        <li>Email: ${phone}</li> 
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
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
