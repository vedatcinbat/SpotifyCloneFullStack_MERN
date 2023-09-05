const mongoose = require('mongoose');
const Artist = require('./artistModel');
const Album = require('./albumModel');

const songSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  artist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Album',
  },
  songImg: {
    type: String,
  },
  publishYear: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  lyrcs: {
    type: String,
  },
  genre: {
    type: String,
  },
  totalListener: {
    type: String,
  },
});
const Song = mongoose.model('Song', songSchema);

module.exports = Song;
