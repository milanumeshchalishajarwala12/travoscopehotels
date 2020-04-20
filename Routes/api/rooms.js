const express = require('express');
const router = express.Router();
const Room = require('../../Models/Rooms');
const { check, validationResult } = require('express-validator');
const moment = require('moment');

//Get Rooms

router.get('/', async (req, res) => {
  try {
    const rooms = await Room.find().sort('destination');
    if (rooms.length > 0) {
      res.json(rooms);
    } else {
      return res.json({ msg: 'No rooms found' });
    }
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

router.post('/search', async (req, res) => {
  try {
    const { destination, checkindate, checkoutdate, noofguests } = req.body;
    const rooms = await Room.find({
      destination: destination,
      maxCap: { $gte: noofguests },
    }).sort('priceperday');
    if (rooms.length > 0) {
      res.json(rooms);
    } else {
      return res.json({ msg: 'No rooms found' });
    }
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

module.exports = router;
