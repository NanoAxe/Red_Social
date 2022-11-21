import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfiles } from '../models/perfiles';

@Injectable({
  providedIn: 'root'
})
export class PerfilesService {
  private urlEndPoint: string = URL_BACKEND+'/perfiles';

  constructor(private http:HttpClient) { }

  getPerfiles(): Observable<Perfiles[]>{
    return this.http.get<Perfiles[]>(this.urlEndPoint);  
  }

}
