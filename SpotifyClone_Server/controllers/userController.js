const User = require('./../models/userModel');
const Song = require('./../models/songModel');
exports.allUsers = async (req, res) => {
  const allUsers = await User.find().populate({
    path: 'likedSongs',
    select: 'title artist album songImg publishYear genre duration',
    populate: {
      path: 'artist album',
      select: 'artistname album_title',
    },
  });

  res.status(200).json({
    status: 'All Users',
    size: allUsers.length,
    allUsers,
  });
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id).populate({
    path: 'likedSongs',
    select: 'title artist album songImg publishYear genre',
    populate: {
      path: 'artist album',
      select: 'artistname album_title',
    },
  });

  if (!user) {
    res.status(404).json({
      status: 'Fail',
      message: 'User coudnt found',
    });
  }
  res.status(200).json({
    status: 'User',
    username: user.username,
    password: user.password,
    email: user.email,
    age: user.age,
    country: user.country,
    college: user.college,
    playlists: user.playLists,
    likedSongs: [
      {
        size: user.likedSongs.length,
        songs: user.likedSongs,
      },
    ],
  });
};
exports.createUser = async (req, res) => {
  const {
    username,
    password,
    email,
    age,
    country,
    college,
    likedSongs,
    playLists,
  } = req.body;

  const newUser = new User({
    username,
    password,
    email,
    age,
    country,
    college,
    likedSongs,
    playLists,
  });
  await newUser.save();
  res.status(201).json({
    status: 'User created',
    data: {
      newUser,
    },
  });
};

exports.updateUser = async (req, res) => {
  const documentId = req.params.id;
  try {
    const updatedFields = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      documentId,
      {
        $set: updatedFields,
      },
      { new: true },
    );

    if (!updatedUser) {
      return res.status(400).json({ message: 'Document not found' });
    }
    res.status(200).json({ updatedUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating document' });
  }
};

exports.deleteUser = async (req, res) => {
  const deletedUser = await User.findByIdAndRemove(req.params.id);

  res.status(200).json({
    message: 'User has been deleted',
    data: {
      deletedUser,
    },
  });
};

exports.getUserLikedSongs = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).populate({
      path: 'likedSongs',
      populate: {
        path: 'artist album',
        select:
          'artistname monthly_listeners album_title publishYear album_long',
      },
    });

    /* const user = await User.findById(userId).populate({
      path: 'likedSongs',
      populate: {
        path: 'artist album',
      },
    }); */

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      status: 'User With LikedSongs',
      data: {
        user,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
