const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  roomnumber: {
    type: Number,
    required: true,
  },
  roomtype: {
    type: String,
    required: true,
  },
  pricepernight: {
    type: Number,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  noofguests: { type: Number, required: true },

  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
  },
  loyalityPoints: {
    type: Number,
  },
  checkindate: {
    type: Date,
    required: true,
  },
  checkoutdate: {
    type: Date,
    required: true,
  },
  dateofbooking: {
    type: Date,
  },
  address: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  isCheckedIn: {
    type: Boolean,
    required: true,
    default: false,
  },
  isCheckedOut: {
    type: Boolean,
    required: true,
    default: false,
  },
  additionalBookings: [],
});

module.exports = Booking = mongoose.model('booking', BookingSchema);
