const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },

  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },

  occupation: {
    type: String,
    required: true
  },

  phoneNum: {
    type: Number,
    required: true,
    min: 0
  },

  socials: {
    type: String
  },

  color: {          
    type: String
  },

  quote: {          //not well defined yet, will change later
    type: String
  }
  
}, {
  timestamps: true,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;