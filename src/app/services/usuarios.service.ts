import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlEndPoint: String = URL_BACKEND;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.urlEndPoint+'/usuarios');
  }
}
