const mongoose = require('mongoose');

const StaffSchema = new mongoose.Schema({
  loginid: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  doj: {
    type: Date,
    required: true,
  },
  isCurrentEmployee: {
    type: Boolean,
    required: true,
  },
  dol: {
    type: Date,
    required: false,
  },
  contact: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: false,
  },
  salary: {
    type: Number,
    required: false,
  },
  dob: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
});

module.exports = Staff = mongoose.model('staff', StaffSchema);
