const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
    unique: true
  },
  status: {
    type: String,
    default: 'Silver'
  },
  loyalityPoints: {
    type: Number,
    default: 100
  }
});

module.exports = User = mongoose.model('user', UserSchema);