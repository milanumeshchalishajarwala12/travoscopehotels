const express = require('express');
const router = express.Router();
const Booking = require('../../Models/Booking');
const User = require('../../Models/User');
const Location = require('../../Models/Location');

const MassageBooking = require('../../Models/MassageBooking');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  try {
    const { name, Item1, Item2, Item3, Item4, Item5, Item6 } = req.body;
    location = new Location({
      name,
      Item1,
      Item2,
      Item3,
      Item4,
      Item5,
      Item6
    });
    await location.save();
    res.status(200).send(location);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.post('/name', async (req, res) => {
  const { location } = req.body;
  try {
    const result = await Location.findOne({ name: location });
    var obj = {
      name: result.name,
      Item1: result.Item1,
      Item2: result.Item2,
      Item3: result.Item3,
      Item4: result.Item4,
      Item5: result.Item5,
      Item6: result.Item6
    };
    return res.status(200).send(obj);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

router.post('/dish', async (req, res) => {
  try {
    const { cuisine } = req.body;
    const menu = await Location.findOne({ cuisine: cuisine });
    return res.status(200).json(menu);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
