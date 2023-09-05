const Album = require('./../models/albumModel');
const Song = require('./../models/songModel');
const Artist = require('./../models/artistModel');

exports.getAllArtists = async (req, res) => {
  const artists = await Artist.find().populate({
    path: 'popular_songs artist_albums',
    select:
      'title songImg publishYear album duration genre totalListener album_title publishYear duration',
    populate: {
      path: 'album',
      select: 'album_title',
    },
  });

  res.status(200).json({
    status: 'All Artists',
    artistTotal: artists.length,
    artists,
  });
};

exports.getArtist = async (req, res) => {
  const id = req.params.artistId;

  const artist = await Artist.findById(id).populate({
    path: 'popular_songs artist_albums',
    select:
      'title songImg publishYear duration genre lyrcs totalListener album_title publishYear duration',
  });

  if (!artist) {
    res.status(400).json({
      message: 'artist coulnt found!',
    });
  }

  res.status(200).json({
    status: 'Artist',
    artistName: artist.artistname,
    monthlyListeners: artist.monthly_listeners,
    artistabout: artist.artist_about,
    artistalbums: artist.artist_albums,
    popularSongs: artist.popular_songs,
  });
};

exports.createArtist = async (req, res) => {
  const {
    artistname,
    monthly_listeners,
    popular_songs,
    artist_albums,
    artist_about,
  } = req.body;

  const newArtist = new Artist({
    artistname,
    monthly_listeners,
    popular_songs,
    artist_albums,
    artist_about,
  });

  await newArtist.save();

  res.status(200).json({
    status: 'Artist Has Been Created',
    newArtist,
  });
};

exports.updateArtist = async (req, res) => {
  const documentId = req.params.artistId;
  try {
    const updatedFields = req.body;
    const updatedArtist = await Artist.findByIdAndUpdate(
      documentId,
      {
        $set: updatedFields,
      },
      { new: true },
    );

    if (!updatedArtist) {
      return res.status(400).json({ message: 'Artist not found' });
    }
    res.status(200).json({ updatedArtist });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating document' });
  }
};
