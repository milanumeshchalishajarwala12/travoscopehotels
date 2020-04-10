const express = require('express');
const router = express.Router();
const Booking = require('../../Models/Booking');
const User = require('../../Models/User');
const nodemailer = require('nodemailer');
router.post('/', async (req, res) => {
  try {
    const {
      destination,
      roomnumber,
      roomtype,
      pricepernight,
      fullname,
      noofguests,
      email,
      phone,
      status,
      loyalitypoints,
      checkindate,
      checkoutdate,
      address,
      total,
      isCheckedIn,
      isCheckedOut,
    } = req.body;
    const dateofbooking = Date.now();

    booking = new Booking({
      destination,
      roomnumber,
      roomtype,
      pricepernight,
      fullname,
      noofguests,
      email,
      phone,
      status,
      loyalitypoints,
      checkindate,
      checkoutdate,
      address,
      total,
      dateofbooking,
      isCheckedIn,
      isCheckedOut,
    });

    await booking.save();
    return res.status(200).json({ msg: 'Booking Completed' });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});

router.post('/reguser', async (req, res) => {
  const {
    destination,
    roomnumber,
    roomtype,
    pricepernight,
    noofguests,
    checkindate,
    checkoutdate,
    address,
    total,
  } = req.body;
  const user = await User.find({ email: req.body.email });

  try {
    const dateofbooking = Date.now();

    await User.update(
      { email: req.body.email },
      {
        $push: {
          bookings: {
            destination: destination,
            roomnumber: roomnumber,
            roomtype: roomtype,
            pricepernight: pricepernight,
            noofguests: noofguests,
            checkindate: checkindate,
            checkoutdate: checkoutdate,
            address: address,
            total: total,
            dateofbooking: dateofbooking,
          },
        },
      }
    );

    if (user == null) {
      console.log('User Not Found');
      return res.send('User Not Found');
    }
    return res.status(200).json({ user });
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});

router.get('/', async (req, res) => {
  const bookings = await Booking.find();
  return res.status(200).send(bookings);
});

router.post('/mybookings', async (req, res) => {
  const bookings = await Booking.find({
    email: req.body.email,
  }).sort('checkindate');
  res.send(bookings);
});

router.post('/checkin', async (req, res) => {
  const bookings = await Booking.find({
    email: req.body.email,
    checkindate: Date(now).toDateString(),
  }).sort('checkindate');
  res.send(bookings);
});

router.post('/sendconfemail', async (req, res) => {
  const {
    firstname,
    destination,
    checkindate,
    checkoutdate,
    roomtype,
    bedtype,
    email,
  } = req.body;
  console.log(req.body);
  try {
    const output = `
      Hello ${firstname},
       <br/>
      Your booking at ${destination}  has been confirmed.
      <br/>
      <p>Following are your booking details.</p>
      <p>Room Type: ${roomtype} ${bedtype}</p>
      <p>Check-In: ${checkindate}</p>
      <p>Check-Out: ${checkoutdate}</p>

      I Hope you have a great stay!

      Enjoy!
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
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
