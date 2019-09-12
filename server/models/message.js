const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  sender: {
    type: String,
    required: true
  },
  recipient: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Message', MessageSchema);