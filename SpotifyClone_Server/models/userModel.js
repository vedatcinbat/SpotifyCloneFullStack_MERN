const mongoose = require('mongoose');
const Song = require('./songModel');
const PlayList = require('./playlistModel');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  likedSongs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Song',
    },
  ],
  playLists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PlayList',
    },
  ],
});
const User = mongoose.model('User', userSchema);

module.exports = User;
