const express = require('express');
// Controllers
const userController = require('./../controllers/userController');

const router = express.Router();

router.route('/').get(userController.allUsers).post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/:userId/likedSongs').get(userController.getUserLikedSongs);

// api/091239012309128/likedSongs

module.exports = router;
