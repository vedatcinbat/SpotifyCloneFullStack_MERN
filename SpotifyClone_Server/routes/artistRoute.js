const express = require('express');
const artistController = require('./../controllers/artistController');

const router = express.Router();

router
  .route('/')
  .get(artistController.getAllArtists)
  .post(artistController.createArtist);
router
  .route('/:artistId')
  .get(artistController.getArtist)
  .patch(artistController.updateArtist);

module.exports = router;
