const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  name: { type: String },
  Item1: {
    type: String
  },
  Item2: {
    type: String
  },
  Item3: {
    type: String
  },
  Item4: {
    type: String
  },
  Item5: {
    type: String
  },
  Item6: {
    type: String
  }
});

module.exports = Location = mongoose.model('location', LocationSchema);
