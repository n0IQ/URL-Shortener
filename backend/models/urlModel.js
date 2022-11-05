const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
    unique: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    required: true,
    unique: [true, 'ID should be unique'],
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;
