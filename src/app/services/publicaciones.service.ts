import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicaciones } from '../models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private urlEndPoint: string = URL_BACKEND+'/publicacion';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Publicaciones[]>{
    return this.http.get<Publicaciones[]>(this.urlEndPoint);
  }

  get(id: number): Observable <Publicaciones>{
    return this.http.get<Publicaciones>(this.urlEndPoint + '/' + id);
  }

  create(publicacion: Publicaciones): Observable<any>{
    return this.http.post(this.urlEndPoint,publicacion);
  }

  update(publicacion: Publicaciones, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/' + id,publicacion);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.urlEndPoint + '/' + id);
  }

}
