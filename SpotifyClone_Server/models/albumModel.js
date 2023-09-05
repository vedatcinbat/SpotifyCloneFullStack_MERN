const mongoose = require('mongoose');
const Song = require('./songModel');
const Artist = require('./artistModel');

const albumSchema = mongoose.Schema({
  album_title: {
    type: String,
    required: true,
    unique: true,
  },
  album_artists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist',
    },
  ],
  publishYear: {
    type: String,
    required: true,
  },
  album_long: {
    type: String,
    required: true,
  },
  album_songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
    },
  ],
  albumImg: {
    type: String,
  },
});
const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
