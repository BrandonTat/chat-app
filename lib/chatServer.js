const io = require('socket.io');

let chat;

const chatServer = {
  listen(server) {
    chat = io(server);

    chat.on('connection', (socket) => {
      console.log('connected');

      socket.on('disconnect', () => {
        console.log('disconnected');
      });
    });
  }
};

module.exports = chatServer;
