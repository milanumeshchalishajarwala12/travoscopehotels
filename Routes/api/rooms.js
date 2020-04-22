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
    const { destination, stayArray, noofguests } = req.body;
    const rooms = await Room.find({
      destination: destination,
      maxCap: { $gte: noofguests },
    }).sort('-priceperday');
    var finalRooms = [];
    /*
    stayArray = [];
    var demo1 = new Date(checkindate).getTime() - 84600000;
    var stayDays =
      (new Date(checkoutdate).getTime() - new Date(checkindate).getTime()) /
      1000 /
      60 /
      60 /
      24;

    for (var i = 0; i < stayDays; ++i) {
      demo1 = demo1 + 84600000;

      stayArray.push(new Date(demo1).toUTCString().substring(0, 16));
    }
    */

    rooms.map((room) => {
      var arr1 = room.bookingArray;
      var obj = {};

      arr1.forEach((el, index) => {
        obj[el] = index;
      });

      var check = stayArray.every((el) => {
        return obj[el] !== undefined;
      });

      //=========

      if (check == false) {
        finalRooms.push(room);
      }
    });
    res.status(200).send(finalRooms);
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

router.post('/avail', async (req, res) => {
  try {
    const { id, bookingArray } = req.body;
    const room = await Room.findOne({ _id: id });

    var demoArray = [];
    demoArray = bookingArray;
    await Room.update(
      { _id: id },
      { $addToSet: { bookingArray: bookingArray } }
    );

    res.status(200).json({ room });
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
