import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from '../services/upload-files.service';
import { FileModel } from '../models/fileModel';
import { URL_BACKENDFILES } from '../config/config';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-test-files',
  templateUrl: './test-files.component.html',
  styleUrls: ['./test-files.component.css']
})
export class TestFilesComponent implements OnInit {
  
  private urlEndPoint: string = URL_BACKENDFILES;
  photoSelected!: string | ArrayBuffer | null;
  imagenes!: FileModel[];
  lista: any = [];
  file?: File;
  constructor(private fileService: UploadFilesService) { }

  ngOnInit(): void {
    this.fileService.getAll().subscribe(response =>{
      this.imagenes = response;
    });
  }

  capturar(event: any):void{
    const archivoCapturado = event.target.files[0];
    this.lista.push(archivoCapturado);
    console.log(archivoCapturado.name);
    this.file= archivoCapturado;
    console.log(this.file);
  }

  subirArchivo(): any{
    this.fileService.create(this.file!).subscribe(response => {
      console.log(response);
    });
    /*
    try{
      const formularioDatos = new FormData();
      this.lista.array.forEach(archivo => {
        console.log(archivo);
        formularioDatos.append('files',archivo);
      });
      this.fileService.create(formularioDatos).subscribe(response => {
        console.log(response);
      });
    }catch(e){
      console.log("error",e);
    }*/
  }

}
