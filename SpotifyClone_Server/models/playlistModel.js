const mongoose = require('mongoose');
const Song = require('./songModel');
const User = require('./userModel');

const playListSchema = mongoose.Schema({
  playlist_title: {
    type: String,
  },
  playlist_creator: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  ],
  playlist_songs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Song,
    },
  ],
  playlist_createdAt: {
    type: Date,
  },
});
const PlayList = mongoose.model('PlayList', playListSchema);

module.exports = PlayList;
