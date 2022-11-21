import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicaciones } from '../models/publicaciones';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {
  private urlEndPoint: string = URL_BACKEND+'/publicaciones';

  constructor(private http: HttpClient) { }

  getPublicaciones(): Observable<Publicaciones[]>{
    return this.http.get<Publicaciones[]>(this.urlEndPoint);
  }

}
