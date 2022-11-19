import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfiles } from '../models/perfiles';
import { Publicaciones } from '../models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private urlEndPoint: String = URL_BACKEND;

  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<Publicaciones[]>{
    return this.http.get<Publicaciones[]>(this.urlEndPoint+'/publicaciones');
  }

}
