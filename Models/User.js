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
  },
  addtionalcharges: {
    type: Number
  },
  bookings: [
    {
      destination: {
        type: String,
        required: true
      },
      roomnumber: {
        type: Number,
        required: true
      },
      roomtype: {
        type: String,
        required: true
      },
      pricepernight: {
        type: Number,
        required: true
      },
      fullname: {
        type: String,
        required: true
      },
      noofguests: { type: Number, required: true },

      email: {
        type: String,
        required: true
      },
      phone: {
        type: Number,
        required: true
      },
      status: {
        type: String
      },
      loyalityPoints: {
        type: Number
      },
      checkindate: {
        type: Date,
        required: true
      },
      checkoutdate: {
        type: Date,
        required: true
      },
      dateofbooking: {
        type: Date
      },
      address: {
        type: String,
        required: true
      },
      total: {
        type: Number,
        required: true
      }
    }
  ],
  isCheckedIn: {
    type: Boolean
  },
  isCheckedOut: {
    type: Boolean
  }
});

module.exports = User = mongoose.model('user', UserSchema);
