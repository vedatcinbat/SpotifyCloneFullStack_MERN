const mongoose = require('mongoose');
const Song = require('./songModel');
const Album = require('./albumModel');

const artistSchema = mongoose.Schema({
  artistname: {
    type: String,
    required: true,
  },
  monthly_listeners: {
    type: String,
    required: true,
  },
  popular_songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
    },
  ],
  artist_albums: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
    },
  ],
  artist_about: {
    type: String,
    required: true,
    trim: true,
  },
  artist_img: {
    type: String,
  },
});
const Artist = mongoose.model('Artist', artistSchema);
module.exports = Artist;
