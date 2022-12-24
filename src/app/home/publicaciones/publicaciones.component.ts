import { Component, Input, OnInit} from '@angular/core';
import { Publicaciones } from '../../models/publicaciones';
import { PublicacionesService } from '../../services/publicaciones.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Perfiles } from '../../models/perfiles';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { UploadFilesService } from '../../services/upload-files.service';
import { URL_BACKENDFILES } from '../../config/config';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  
  @Input() id: number = 0;
  lista: Publicaciones[] | undefined;
  form!: FormGroup;
  newPublic: Publicaciones | undefined;
  usuario!: Usuarios;
  registroPerfiles!: Perfiles[];
  file!: File;
  private urlImg: string = URL_BACKENDFILES;
  imgclass: string = "btn-img";
  cargo: boolean = false;

  constructor(
    private publicService : PublicacionesService,
    private usuarioService: UsuariosService,
    private fileService: UploadFilesService
    ) {
      this.form = this.crearFormGroup();
      this.cargarPublicaciones();
      
    }

  ngOnInit(): void {
    this.usuarioService.getUsuario(this.id).subscribe(response =>{
      this.usuario=response;
    });
  }

  ngOnChanges(): void {
    this.usuarioService.getUsuario(this.id).subscribe(response =>{
      this.usuario=response;
    });
  }

//***********  Publicaciones ***************

  cargarPublicaciones(){
    this.publicService.getAll().subscribe(response =>{
      this.lista=response;
    });
  }

  darMeGusta(pub: Publicaciones | undefined){
    console.log("antes del like "+pub?.likes);
    pub!.likes+=1;
    console.log("despues del like "+pub?.likes);
    this.publicService.update(pub!,pub!.idPublicacion!);
    this.cargarPublicaciones();
  }

  crearPublicacion(){
    this.subirArchivo();
    if(this.imgclass=="btn-img-success"){
      this.newPublic={
        descripcion: this.form.value.descripcion,
        likes: 0,
        img: this.file.name,
        urlImg: this.urlImg +"/",
        usuario: this.usuario
      }
    }else{
      this.newPublic={
        descripcion: this.form.value.descripcion,
        likes: 0,
        usuario: this.usuario,
      }
    }
    this.subirPublicacion();
  }

  subirPublicacion(){
    this.imgclass="btn-img";
    this.publicService.create(this.newPublic!).subscribe(response => {
      console.log("Se creo "+response.urlImg + " " + response.img);
    });
    this.newPublic={
      descripcion: "",
      likes: 0,
      img: "",
      urlImg: "",
      usuario: this.usuario
    }
    this.form=this.crearFormGroup();
    this.cargarPublicaciones();
  }

  crearFormGroup():FormGroup{
    return new FormGroup({
      descripcion: new FormControl("")
    });
  } 

  eliminarPublicacion(x: Publicaciones):void{
    console.log("Llego la publicacion a borrar"+x.idPublicacion);
    this.publicService.delete(x.idPublicacion!).subscribe(response => {
      console.log("Se borro?");
    });
    this.cargarPublicaciones();
  }

  capturar(event: any):void{
    const archivoCapturado = event.target.files[0];
    this.file= archivoCapturado;
    this.imgclass="btn-img-success";
  }

  subirArchivo(): any{
    this.fileService.create(this.file!).subscribe(response => {
      console.log(response);
    });
  }
}
