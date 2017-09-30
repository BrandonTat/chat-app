class Chat {
  constructor(socket) {
    this.socket = socket;

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(message) {
    this.socket.emit('message', {text: message});
  }
}

module.exports = Chat;
