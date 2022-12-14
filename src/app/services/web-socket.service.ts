import { Injectable, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
 
  socket: any;
  server = "http://localhost:3000"

  constructor() { 
    this.socket = io.connect(this.server);
  }

  listen(eventName: String) {
    return new Observable((Subscriber) => {
      this.socket.On(eventName, (data : any) => {
        Subscriber.next(data);
      });
    });
  }

  emit(eventName: String, data: any){
    this.socket.emit(eventName,data);
  }


}
