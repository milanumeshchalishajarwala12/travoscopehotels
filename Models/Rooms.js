const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  roomtype: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    required: true,
    default: true
  },
  pricepernight: {
    type: Number,
    required: true
  },
  amenities: [
    {
      wifi: {
        type: Boolean,
        isAvailable: true
      }
    },
    {
      jacuzi: {
        type: Boolean,
        isAvailable: true
      }
    },
    {
      laundry: {
        type: Boolean,
        isAvailable: true
      }
    },
    {
      airportPickupDrop: {
        type: Boolean,
        isAvailable: true
      }
    }
  ]
});

module.exports = Room = mongoose.model('room', RoomSchema);
