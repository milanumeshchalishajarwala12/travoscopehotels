const express = require('express');
const router = express.Router();
const Room = require('../../Models/Rooms');
const { check, validationResult } = require('express-validator');
const auth = require('../../Middleware/auth');

//Add rooms to database
router.post(
  '/',

  [
    check('destination', 'Valid destination not found').not().isEmpty(),
    check('roomtype', 'Valid room type not found').not().isEmpty(),

    check('pricepernight', 'Valid price not found').not().isEmpty(),
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        destination,
        roomtype,
        pricepernight,
        wifi,
        jacuzi,
        laundry,
        airportPickupDrop,
        bedtype,
      } = req.body;

      room = new Room({
        destination,
        roomtype,
        pricepernight,
        wifi,
        jacuzi,
        laundry,
        airportPickupDrop,
        bedtype,
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

//Get Rooms from database
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

//Search rooms by destination
router.post('/search', async (req, res) => {
  try {
    const { destination } = req.body;
    const rooms = await Room.find({ destination: destination }).sort(
      'destination'
    );
    if (rooms.length > 0) {
      res.json(rooms);
    } else {
      return res.json({ msg: 'No rooms found' });
    }
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

router.delete('/delete:id', async (req, res) => {
  const room = await Room.findById(req.params.id);
  res.json({ RoomRemoved: room });
  await room.remove();
  res.json({ Room: room });
});

module.exports = router;
