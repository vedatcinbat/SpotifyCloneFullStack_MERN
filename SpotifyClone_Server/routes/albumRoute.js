const express = require('express');
const albumController = require('./../controllers/albumController');

const router = express.Router();

router
  .route('/')
  .get(albumController.getAllAlbums)
  .post(albumController.createAlbum);
router
  .route('/:albumId')
  .get(albumController.getAlbum)
  .patch(albumController.updateAlbum);

module.exports = router;
