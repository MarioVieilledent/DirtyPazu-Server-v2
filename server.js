const express = require('express');
const cors = require('cors')
const axios = require('axios');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');

const DEBUG_DICT = require('./dict.json');

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.set(PORT, process.env.PORT);
app.use(express.static('./dist/'));
app.use(cors());

// MongoDB
const uri = `mongodb+srv://DirtyPazuv2:${process.env.MONGO_PWD}@pazucluster.klrce.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const clusterName = 'PazuSarl';

const collectionName = 'DibiDictonary';
const collectionSuggestionName = 'Suggestion'
const collectionProfilesName = 'Profiles'
const collectionLogsName = 'logsDirtyPazu';

/*
client.connect(async (err) => {
  if (err) throw err;
});
*/

// Discord OAuth
app.use('/auth', express.static('./dist/'));

app.get('/exchange-code', async (req, res) => {
  try {
    const response = await axios.post(
      'https://discord.com/api/oauth2/token',
      new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type: 'authorization_code',
        scope: 'identify email',
        code: req.query.code,
        redirect_uri: process.env.REDIRECT_URI,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Use the response data as needed
    const accessToken = response.data;
    console.log(accessToken);

    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    });

    // Use the user data as needed
    res.send(userResponse.data);
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    res.status(500).send('An error occurred while exchanging the authorization code.');
  }
});

// API of Dictionary
app.get('/dict', async (req, res) => {
  console.log('/dict, récupération du dictionnaire');
  /*
  try {
    data = await client.db(clusterName).collection(collectionName).find().toArray();
    res.send(data);
  } catch (err) {
    console.error(err);
  }
  */
  res.send(DEBUG_DICT);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});