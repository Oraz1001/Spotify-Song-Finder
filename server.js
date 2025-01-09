const express = require('express');
const bodyParser = require('body-parser');
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Added for JSON parsing
app.use(express.static(path.join(__dirname, 'public')));

// Spotify API setup
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
  (data) => {
    console.log('Access token retrieved:', data.body['access_token']); // Debug log
    spotifyApi.setAccessToken(data.body['access_token']);
  },
  (err) => {
    console.error('Error retrieving access token', err);
  }
);

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.post('/search', (req, res) => {
  const query = req.body.query;
  console.log('Received query:', query); // Debug log

  spotifyApi
    .searchTracks(query)
    .then((data) => {
      const tracks = data.body.tracks.items.map((track) => ({
        name: track.name,
        artists: track.artists.map((artist) => artist.name).join(', '),
        album: track.album.name,
        url: track.external_urls.spotify,
        image: track.album.images[0]?.url,
        releaseDate: track.album.release_date,
      }));
      res.json(tracks);
    })
    .catch((err) => {
      console.error('Error fetching tracks', err);
      res.status(500).send('Error fetching tracks');
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});