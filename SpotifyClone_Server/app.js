const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routes
const userRoute = require('./routes/userRoute');
const songRoute = require('./routes/songRoute');
const albumRoute = require('./routes/albumRoute');
const artistRoute = require('./routes/artistRoute');

const app = express();

// Middlewares
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON request bodies

const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use('/api/users', cors(corsOptions), userRoute);
app.use('/api/songs', cors(corsOptions), songRoute);
app.use('/api/albums', cors(corsOptions), albumRoute);
app.use('/api/artists', cors(corsOptions), artistRoute);

module.exports = app;
