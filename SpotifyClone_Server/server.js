const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/userModel');
const Artist = require('./models/artistModel');
const Song = require('./models/songModel');
const Album = require('./models/albumModel');
const PlayList = require('./models/playlistModel');

const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Db Connection Succesfull'));

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
  } catch (error) {
    console.log(error);
  }
  console.log(`Listening port ${port}`);
});
