const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  linkedIn: {
    type: String,
    required: true
  },
  photourl: {
    type: String,
    required: true
  },
  skills: []
});

module.exports = mongoose.model('User', UserSchema);
