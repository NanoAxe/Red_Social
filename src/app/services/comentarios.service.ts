import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private urlEndPoint: string = URL_BACKEND+'/comentarios';

  constructor(private http:HttpClient) { }

  getComentarios(): Observable<Comentarios[]>{
    return this.http.get<Comentarios[]>(this.urlEndPoint);
  }
  
}
