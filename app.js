const express = require('express');
const app = express();

const http = require('http').Server(app);
const path = require('path');

const chatServer = require('./lib/chatServer');
chatServer.listen(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

http.listen(3000, () => {
  console.log('App listening on port 3000!');
});
