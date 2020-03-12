const express = require('express');
const router = express.Router();
const Room = require('../../Models/Rooms');
const { check, validationResult } = require('express-validator');

//Add rooms

router.post(
  '/',
  [
    check('destination', 'Valid destination not found')
      .not()
      .isEmpty(),
    check('roomtype', 'Valid room type not found')
      .not()
      .isEmpty(),
    check('isAvailable', 'Valid availability not found')
      .not()
      .isEmpty(),
    check('pricepernight', 'Valid price not found')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { destination, roomtype, isAvailable, pricepernight } = req.body;

      room = new Room({
        destination,
        isAvailable,
        roomtype,
        pricepernight
      });
      await room.save();
      console.log('Room added');
      return res.status(200).json({ room });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//Get Rooms

router.get('/', async (req, res) => {
  try {
    const isAvailable = 'true';

    const rooms = await Room.find({ isAvailable });
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
