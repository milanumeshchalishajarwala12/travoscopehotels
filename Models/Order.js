const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },
  roomnumber: {
    type: Number,
    required: true,
  },
  orderdetails: {
    type: Object,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  orderdate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Order = mongoose.model('order', OrderSchema);
