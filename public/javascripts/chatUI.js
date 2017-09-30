const Chat = require('./chat');

class ChatUI {
  constructor(socket) {
    this.chat = new Chat(socket);
    this.form = document.querySelector('form');
    this.msgList = document.querySelector('ul#msg-list');
    this.roomList = document.querySelector('ul#room-list');
    this.input = document.querySelector('input');
    this.room = document.querySelector('#room');

    this.retrieveUserInput = this.retrieveUserInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.submitHandler();
  }

  retrieveUserInput() {
    return this.input.value;
  }

  sendMessage() {
    this.chat.sendMessage(this.retrieveUserInput());
  }

  addMessage(message) {
    let newMessage = document.createElement('li');
    newMessage.textContent = message;
    this.msgList.appendChild(newMessage);
  }

  submitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.sendMessage();
      this.input.value = "";
    });
  }
}

module.exports = ChatUI;
// Handles DOM manipulation
