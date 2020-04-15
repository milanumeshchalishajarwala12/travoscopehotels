const express = require('express');
const router = express.Router();
const Booking = require('../../Models/Booking');
const User = require('../../Models/User');
const MassageBooking = require('../../Models/MassageBooking');
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
      isCheckedOut
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
      isCheckedOut
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
    total
  } = req.body;
  const user = await User.find({ email: req.body.email });

  try {
    const dateofbooking = Date.now();
    await User.update({ isCheckedIn: false, isCheckedOut: false });

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
            dateofbooking: dateofbooking
          }
        }
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
    email: req.body.email
  }).sort('checkindate');
  res.send(bookings);
});

router.post('/checkin', async (req, res) => {
  const bookings = await Booking.find({
    email: req.body.email,
    checkindate: Date(now).toDateString()
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
    email
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
        pass: 'Starbucks$6' // generated ethereal password
      }
    });

    // send mail with defined transport object
    let info = {
      from: '"Travoscope Hotels®" <milanchal12@gmail.com>', // sender address
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
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.post('/checkbookingin', async (req, res) => {
  try {
    const booking = await Booking.findOne({ _id: req.body.id });
    const user = await User.findOne({ email: req.body.email });

    await booking.updateOne({ isCheckedIn: true });
    await user.updateOne({ isCheckedIn: true });
    res.json({ booking });
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

router.post('/checkbookingout', async (req, res) => {
  const booking = await Booking.findOne({ _id: req.body.id });
  const bookings = await Booking.find({ email: req.body.email });
  const user = await User.findOne({ email: req.body.email });
  var total_total = 0;
  bookings.map(booking => (total_total = total_total + booking.total));
  console.log(total_total);
  const Silver = 'Silver';
  const Gold = 'Gold';
  const Platinum = 'Platinum';
  const Elite = 'Elite';

  try {
    if (total_total < 600) {
      var lp = 0;
      var points_added = booking.total;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,

        loyalityPoints: lp
      });
      await booking.updateOne({
        isCheckedOut: true
      });

      await user.updateOne({
        status: Silver
      });
    } else if (600 < total_total < 1000) {
      var lp = 0;

      var points_added = booking.total * 1.25;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,

        status: Gold,
        loyalityPoints: lp
      });
      await booking.updateOne({
        isCheckedOut: true
      });
    } else if (1000 < total_total < 1500) {
      var lp = 0;

      var points_added = booking.total * 1.5;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,

        status: Platinum,
        loyalityPoints: lp
      });
      await booking.updateOne({
        isCheckedOut: true
      });
    } else if (1500 < total_total) {
      var lp = 0;

      var points_added = booking.total * 2;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,
        status: Elite,
        loyalityPoints: lp
      });
    } else {
      user.status;
    }

    //res.json({ booking, user });
  } catch (err) {
    res.send(err.message);
    console.log(err.message);
  }
});

/*
router.post('/checkout/booking/:id', async (req, res) => {
  try {
    const booking = await Booking.findOne(req.params._id);
    await booking.updateOne({ isCheckedOut: true });
    res.json(booking);
    console.log(booking);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

*/
router.post('/bookslot', async (req, res) => {
  const {
    email,
    slottime,
    slotdate,
    destination,
    checkindate,
    checkoutdate,
    roomnumber,
    massagetotal,
    total,
    fullname
  } = req.body;
  try {
    mbooking = new MassageBooking({
      email,
      slottime,
      slotdate,
      destination,
      checkindate,
      checkoutdate,
      roomnumber,
      massagetotal,
      total,
      fullname
    });

    await mbooking.save();
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});
/*
router.post('/regusermbooking', async (req, res) => {
  const {
    email,
    slottime,
    slotdate,
    destination,
    checkindate,
    checkoutdate,
    roomnumber,
    massagetotal,
    total,
    fullname
  } = req.body;
  var typeofbooking = 'Deep Tissue Massage';
  const user = await User.findOne({ email: email });

  try {
    await user.update(
      { email: email },
      {
        $push: {
          additionalbookings: {
            fullname: fullname,
            typeofbooking: typeofbooking,
            slottime: slottime,
            slotdate: slotdate,
            destination: destination,
            roomnumber: roomnumber,
            checkindate: checkindate,
            checkoutdate: checkoutdate,
            massagetotal: massagetotal
          }
        }
      }
    );
    

    await user.updateOne({ additionalcharges: massagetotal });
    res.json({ user });

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
*/

router.post('/getaddbookings', async (req, res) => {
  const addbookings = await MassageBooking.find({
    email: req.body.email
  }).sort('checkindate');
  res.send(addbookings);
});

module.exports = router;
