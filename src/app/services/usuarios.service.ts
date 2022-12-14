import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKEND } from '../config/config';
import { Usuarios } from '../models/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private urlEndPoint: string = URL_BACKEND+'/usuario';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.urlEndPoint);
  }

  getUsuario(id: number): Observable <Usuarios>{
    return this.http.get<Usuarios>(this.urlEndPoint + '/:' + id);
  }

  crearUsuario(user: Usuarios): Observable<any>{
    return this.http.post(this.urlEndPoint,user);
  }

  updateUsuario(user: Usuarios, id: number): Observable<any>{
    return this.http.put(this.urlEndPoint + '/:' + id,user);
  }

  deleteUsuario(id: number): Observable <any>{
    return this.http.delete(this.urlEndPoint + '/:' + id);
  }

}
