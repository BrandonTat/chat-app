const io = require('socket.io');

let chat;

const chatServer = {
  handleMessageBroadcast(socket) {
    socket.on('message', (message) => {
      socket.emit('message', {
        text: `${message.text}`
      });
    });
  },

  listen(server) {
    chat = io(server);

    chat.on('connection', (socket) => {
      console.log('connected');
      this.handleMessageBroadcast(socket);
    });
  }
};

module.exports = chatServer;
