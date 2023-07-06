const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const axios = require('axios');
const dotenv = require('dotenv');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;

const DEBUG_DICT = require('./dict.json');

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();
app.set(PORT, process.env.PORT);
app.use(bodyParser.json()); // For parsing body data
app.use(express.static('./dist/')); // Serving static web app
app.use(cors()); // Allow CORS

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

const collectionDictionaryName = 'DibiDictonary';
const collectionDiscordProfilesName = 'DiscordProfiles'
const collectionSuggestionName = 'Suggestion'
const collectionLogsName = 'logsDirtyPazu';

/*
client.connect(async (err) => {
  if (err) throw err;
});
*/

// Discord OAuth
app.use('/auth', express.static('./dist/'));

app.get('/exchange-code', async (req, res) => {
  console.log('/exchange-code, user connected');
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

    // Get the information about the user just logged in
    const userResponse = await axios.get('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    });

    // Add Discord user to mongodb
    const allUsers = await client.db(clusterName).collection(collectionDiscordProfilesName).find().toArray();

    // Check if the user is new
    let userConnected = {};

    let alreadyExist = false;
    allUsers.forEach(user => {
      if (user.discord.email === userResponse.data.email) {
        alreadyExist = true;
        userConnected = user; // Gathering all data from user
      }
    });

    if (alreadyExist) { // User already exist
      console.log('already exist');
      await client.db(clusterName).collection(collectionDiscordProfilesName).updateOne({ 'discord.id': userConnected.discord.id }, { $push: { connections: Date.now() }, $inc: { xp: 0.1 } })

    } else { // If new user
      console.log('new user, profile creation');
      userConnected = {
        discord: userResponse.data,
        roles: ['default'],
        xp: 0.0,
        money: 0.0,
        connections: [Date.now()]
      };
      await client.db(clusterName).collection(collectionDiscordProfilesName).insertOne(userConnected)
    }

    // Send User Info to client
    res.send(userConnected);
  } catch (error) {
    console.error('Error exchanging authorization code:', error);
    res.status(500).send('An error occurred while exchanging the authorization code.');
  }
});

// Get all dictionary
app.get('/dict', async (req, res) => {
  console.log('/dict, fetching dictionary');
  try {
    data = await client.db(clusterName).collection(collectionDictionaryName).find().toArray();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.send(DEBUG_DICT);
  }
});

// Get data of a single word by an _id
app.get('/wordId', async (req, res) => {
  console.log('/wordId');
  const id = new ObjectId(req.query.id);
  console.log(id);
  if (id) {
    try {
      data = await client.db(clusterName).collection(collectionDictionaryName).findOne({ _id: id });
      res.send(data);
    } catch (err) {
      console.error(err);
      res.send({ err: "No id matching: " + err });
    }
  } else {
    res.send({ err: "Need id in query param" })
  }
});

// Get all suggestions
app.get('/suggestions', async (req, res) => {
  console.log('/suggestions, fetching suggestions');
  try {
    data = await client.db(clusterName).collection(collectionSuggestionName).find().toArray();
    res.send(data);
  } catch (err) {
    console.error(err);
    res.send(DEBUG_DICT);
  }
});

// Send a new suggestion of words
app.post('/suggest', async (req, res) => {
  console.log('Ajout d\'une suggestion');
  const suggestion = req.body;
  if (suggestion && suggestion.author && suggestion.versions.length > 0) {
    try {
      client.db(clusterName).collection(collectionSuggestionName).insertOne(suggestion);
      res.send('"ok"');
    } catch (e) {
      console.error(err);
      res.send({ err: "Error while suggesting: " + err });
    }
  } else {
    res.send({ err: "Incorrect body input data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});