import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfiles } from '../models/perfiles';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private urlEndPoint: string = URL_BACKEND+'/perfil';

  constructor(private http:HttpClient) { }

  getAll(): Observable<Perfiles[]>{
    return this.http.get<Perfiles[]>(this.urlEndPoint);
  }

  get(id: number): Observable <Perfiles>{
    return this.http.get<Perfiles>(this.urlEndPoint + '/:' + id);
  }

  create(perfil: Perfiles): Observable<any>{
    return this.http.post(this.urlEndPoint,perfil);
  }

  update(perfil: Perfiles, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/:' + id,perfil);
  }

  delete(id: number): Observable <any>{
    return this.http.delete(this.urlEndPoint + '/:' + id);
  }

}
