import { Component, OnInit } from '@angular/core';
import {Message} from './message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: Message[] = [];
  id = 0;
  modalOpen = false;
  needNav = false;
  timeout;
  modalText = '';
  oponentMessages: string[] = [
      'Hello, my Friend',
      'Yes, we want you to work with us',
      'Get to the Choppa!'
  ];
  constructor() { }

  ngOnInit() {
  }
  handleMessageSend(message) {
    console.log(this);
    this.messages.push(new Message(++this.id, 'Ilya', message, '#E2FCED'));
    this.sendOponentMessage();
  }
  deleteMsg(event: object, message: Message) {
    let index: number;
    if ((index = this.messages.indexOf(message)) > -1) {
      this.messages.splice(index, 1);
    }
  }
  sendOponentMessage() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      const randMessage = this.oponentMessages[Math.floor(Math.random() * this.oponentMessages.length)];
      this.messages.push(new Message(++this.id, 'Petek', randMessage, '#E2F2F9'));
    }, 2000);
  }
  openModal() {
    this.needNav = false;
    this.modalText = 'Export complete!';
    this.modalOpen = true;
  }
  confirmDelete() {
    this.needNav = true;
    this.modalText = 'Are you sure you want to delete all messages?';
    this.modalOpen = true;
  }
  deleteAll() {
    this.messages = [];
    this.close();
  }
  close() {
    this.modalOpen = false;
    this.needNav = false;
    this.modalText = '';
  }

}
