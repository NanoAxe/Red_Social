import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_BACKENDFILES } from '../config/config';
import { FileModel } from '../models/fileModel';

@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  private urlEndPoint: string = URL_BACKENDFILES;

  constructor(private http: HttpClient) { }

  getAll(): Observable<FileModel[]>{
    return this.http.get<FileModel[]>(this.urlEndPoint+"/allfiles");
  }

  create(file: File): Observable<HttpEvent<any>>{
    const formData : FormData = new FormData;
    formData.append('files', file);
    const req = new HttpRequest('POST', this.urlEndPoint+'/upload', formData, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

  subir(file: File): Observable<HttpEvent<any>>{
    const formData : FormData = new FormData;
    formData.append('files', file);
    const req = new HttpRequest('POST', this.urlEndPoint+'/subir', formData, {
      responseType: 'json'
    });
    return this.http.request(req);
  }

}
