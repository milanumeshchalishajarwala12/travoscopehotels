const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  roomtype: {
    type: String,
    required: true,
  },
  bedtype: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true,
  },
  pricepernight: {
    type: Number,
    required: true,
  },

  wifi: {
    type: Boolean,
  },
  jacuzi: {
    type: Boolean,
  },

  laundry: {
    type: Boolean,
  },

  airportPickupDrop: {
    type: Boolean,
  },
  maxCap: {
    type: Number,
    max: 6,
    min: 1,
    required: true,
  },
  roomnumber: {
    type: Number,
    required: true,
  },
  loungeAccess: {
    type: Boolean,
    required: true,
  },
});

module.exports = Room = mongoose.model('room', RoomSchema);
