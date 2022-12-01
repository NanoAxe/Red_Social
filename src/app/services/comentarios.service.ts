import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comentarios } from '../models/comentarios';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  private urlEndPoint: string = URL_BACKEND+'/comentario';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Comentarios[]>{
    return this.http.get<Comentarios[]>(this.urlEndPoint);
  }

  get(id: number): Observable <Comentarios>{
    return this.http.get<Comentarios>(this.urlEndPoint + '/' + id);
  }

  create(comentario: Comentarios): Observable<any>{
    return this.http.post(this.urlEndPoint,comentario);
  }

  update(comentario: Comentarios, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id,comentario);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }

}
