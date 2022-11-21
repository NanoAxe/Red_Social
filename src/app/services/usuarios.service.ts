import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlEndPoint: string = URL_BACKEND;

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.urlEndPoint+'/usuarios');
  }

  crearUsuario(user: Usuarios): Observable<any>{
    return this.http.post(this.urlEndPoint+'/usuario',user);
  }
}
