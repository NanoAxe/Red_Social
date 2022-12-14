import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  id!: number;
  userChat = {
    user: 0,
    text: ''
  };
  myMessages :any;
  eventName = "send-message";

  constructor(
    private activateroute:  ActivatedRoute,
    private websocket: WebSocketService
    ){}

  ngOnInit(): void {
    this.id = this.activateroute.snapshot.params['id'];
    this.userChat.user = this.id;
    this.websocket.listen("text-event").subscribe((data)=>{
      this.myMessages = data;
    });
  }

  myMessage(){
    this.websocket.emit(this.eventName, this.userChat);
    this.userChat.text = '';
  }

}
