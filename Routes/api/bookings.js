const express = require('express');
const router = express.Router();
const Booking = require('../../Models/Booking');
const User = require('../../Models/User');
const MassageBooking = require('../../Models/MassageBooking');
const nodemailer = require('nodemailer');
router.post('/', async (req, res) => {
  try {
    const {
      firstname,
      bedtype,
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
      firstname,
      bedtype,
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
    bedtype,
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
    subtotalprice,
    tax,
    total,
  } = req.body;
  console.log(req.body);
  try {
    const output = `
    <div className="email">
    <h3>Hi ${firstname},</h3>
    <br />
    <h2 style={{ textAlign: 'center' }}>
      Your booking at ${destination} has been confirmed.
    </h2>
    <br />
    <div className="emailpicture"></div>
    <div style={{ height: '5rem', margin: '20px' }}>
      <p>Following are your booking details:</p>
      <p>Room Type: ${roomtype}, ${bedtype}</p>
      <p>Check-In: ${new Date(checkindate).toUTCString().substring(0, 16)}</p>
      <p>Check-Out: ${new Date(checkoutdate).toUTCString().substring(0, 16)}</p>
      <p>Number of Guests: ${noofguests}</p>
    </div>
    <br />
    <div style={{ height: '5rem', margin: '20px' }}>
      <h3>Summary of Charges:</h3>

      <p>Subtotal: ${subtotalprice} USD</p>
      <p>Tax: ${tax} USD</p>
      <p>Total : ${total} USD</p>
    </div>
    <br/>
    <p>Have a great stay!</p>
  </div>
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
      subject: 'Booking Confirmation', // Subject line
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
  bookings.map((booking) => (total_total = total_total + booking.total));
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

        loyalityPoints: lp,
      });
      await booking.updateOne({
        isCheckedOut: true,
      });

      await user.updateOne({
        status: Silver,
      });
    } else if (600 < total_total < 1000) {
      var lp = 0;

      var points_added = booking.total * 1.25;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,

        status: Gold,
        loyalityPoints: lp,
      });
      await booking.updateOne({
        isCheckedOut: true,
      });
    } else if (1000 < total_total < 1500) {
      var lp = 0;

      var points_added = booking.total * 1.5;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,

        status: Platinum,
        loyalityPoints: lp,
      });
      await booking.updateOne({
        isCheckedOut: true,
      });
    } else if (1500 < total_total) {
      var lp = 0;

      var points_added = booking.total * 2;
      lp = user.loyalityPoints + points_added;

      await user.updateOne({
        isCheckedOut: true,
        isCheckedIn: false,
        status: Elite,
        loyalityPoints: lp,
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
    fullname,
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
      fullname,
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
    email: req.body.email,
  }).sort('checkindate');
  res.send(addbookings);
});

router.post('/checkinemail', async (req, res) => {
  try {
    const {
      firstname,
      destination,
      bedtype,
      roomtype,
      checkindate,
      checkoutdate,
      roomnumber,
      id,
      email,
    } = req.body;
    console.log(req.body);
    const output = `
    <div className="email">
    <h3>Hi ${firstname},</h3>
    <br />
    <h2 style={{ textAlign: 'center' }}>
     You are successfully Checked-In for your upcoming stay at ${destination}.
    </h2>
    <br/>
    <h3>Your Room Number is ${roomnumber}</h3>
    <br />
    <div className="emailpicture"></div>
    <div style={{ height: '5rem', margin: '20px' }}>
      <p>Following are your booking details:</p>
      <p>Room Type: ${roomtype}, ${bedtype}</p>
      <p>Check-In: ${new Date(checkindate).toUTCString().substring(0, 16)}</p>
      <p>Check-Out: ${new Date(checkoutdate).toUTCString().substring(0, 16)}</p>
    </div>
    <br />
    
    <br/>
    <p>Have a great stay!</p>
  </div>
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
      subject: `Checked-In For ${destination} `, // Subject line
      html: output, // html body
    };

    transporter.sendMail(info, (error, info) => {
      if (error) {
        res.json(error);
      }
    });
  } catch (err) {
    res.json(err.message);
  }
});
module.exports = router;
