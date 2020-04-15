const mongoose = require('mongoose');

const MassageBookingSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  roomnumber: {
    type: Number,
    required: true
  },
  slottime: {
    type: String,
    required: true
  },
  slotdate: {
    type: String,
    required: true
  },

  fullname: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  checkindate: {
    type: Date,
    required: true
  },
  checkoutdate: {
    type: Date,
    required: true
  },
  massagetotal: {
    type: Number
  }
});

module.exports = MassageBooking = mongoose.model(
  'massagebooking',
  MassageBookingSchema
);
