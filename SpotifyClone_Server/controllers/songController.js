const Song = require('./../models/songModel');
const Album = require('./../models/albumModel');
const Artist = require('./../models/artistModel');

exports.getAllSongs = async (req, res) => {
  const allSongs = await Song.find()
    .populate('artist', 'artistname')
    .populate('album', 'album_title');
  res.status(200).json({
    status: 'Songs',
    size: allSongs.length,
    allSongs,
  });
};

exports.getSong = async (req, res) => {
  const id = req.params.id;

  const song = await Song.findById(id)
    .populate('artist', 'artistname')
    .populate('album', 'album_title');
  if (!song) {
    res.status(400).json({
      message: 'Song coulnt found!',
    });
  }

  res.status(200).json({
    status: 'Song',
    song,
  });
};

exports.createSong = async (req, res) => {
  const {
    title,
    artist,
    album,
    songImg,
    publishYear,
    duration,
    lyrcs,
    genre,
    totalListener,
  } = req.body;

  const newSong = new Song({
    title,
    artist,
    album,
    songImg,
    publishYear,
    duration,
    lyrcs,
    genre,
    totalListener,
  });

  await newSong.save();

  res.status(200).json({
    status: 'Song Created',
    data: {
      newSong,
    },
  });
};

exports.updateSong = async (req, res) => {
  const documentId = req.params.id;
  try {
    const updatedFields = req.body;
    const updatedSong = await Song.findByIdAndUpdate(
      documentId,
      {
        $set: updatedFields,
      },
      { new: true },
    );

    if (!updatedSong) {
      return res.status(400).json({ message: 'Song not found' });
    }
    res.status(200).json({ updatedSong });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating document' });
  }
};

exports.deleteSong = async (req, res) => {
  const deletedSong = await Song.findByIdAndRemove(req.params.id);

  res.status(200).json({
    message: 'Song has been deleted',

    deletedSong,
  });
};
