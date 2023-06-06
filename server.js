import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.set(PORT, process.env.PORT);
app.use(express.static('./dist/'));

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get('/auth', (req, res) => {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify`;
  res.redirect(discordAuthUrl);
});


app.get('/auth', (req, res) => {
  const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=identify`;
  res.redirect(discordAuthUrl);
});

app.get('/exchange-code', async (req, res) => {
  const code = req.query.code;

  const tokenEndpoint = 'https://discord.com/api/oauth2/token';
  const data = new URLSearchParams();
  data.append('client_id', CLIENT_ID);
  data.append('client_secret', CLIENT_SECRET);
  data.append('grant_type', 'authorization_code');
  data.append('code', code);
  data.append('redirect_uri', REDIRECT_URI);

  try {
    const response = await axios.post(tokenEndpoint, data);
    const { access_token: accessToken } = response.data;

    // Use the access token as needed
    res.send(accessToken);
  } catch (error) {
    console.error('Error exchanging code for access token:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});