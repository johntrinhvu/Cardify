const mongoose = require('mongoose');

// Create a new schema for our user data
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // this field is mandatory
    trim: true // automatically trim whitespace
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  PhoneNum: {
    type: Number,
    required: true,
    min: 0 // phone num cannot be negative
  }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
