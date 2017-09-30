const io = require('socket.io');

let chat;
let guestNum = 1;

let nickNames = {};
let namesUsed = [];

const chatServer = {
  assignGuestName(socket, guestNum, nickNames, namesUsed) {
    const name = `Guest_${guestNum}`;
    nickNames[socket.id] = name;
    socket.emit('nameResult', {
      success: true,
      name
    });

    namesUsed.push(name);
    return guestNum + 1;
  },

  handleMessageBroadcast(socket, nickNames) {
    let name = nickNames[socket.id];

    socket.on('message', (message) => {
      socket.emit('message', {
        text: `${name}: ${message.text}`
      });
    });
  },

  listen(server) {
    chat = io(server);

    chat.on('connection', (socket) => {
      this.assignGuestName(socket, guestNum, nickNames, namesUsed);
      this.handleMessageBroadcast(socket, nickNames);
    });
  }
};

module.exports = chatServer;
