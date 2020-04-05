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
});

module.exports = Room = mongoose.model('room', RoomSchema);
