import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PerfilesService } from 'src/app/services/perfiles.service';
import { Perfiles } from '../../models/perfiles';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { UploadFilesService } from '../../services/upload-files.service';
import { URL_BACKENDFILES } from '../../config/config';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  private urlEndPoint: string = URL_BACKENDFILES;
  perfil: Perfiles | undefined;
  form!:FormGroup;
  id!: number;
  usuario!: Usuarios;
  file!: File;
  photoSelected!: String | undefined;
  

  constructor(
    private perfilService: PerfilesService,
    activateRoute : ActivatedRoute,
    private usuarioService: UsuariosService,
    private router: Router,
    private fileService: UploadFilesService
    ){
      this.id = activateRoute.snapshot.params['id'];
      this.photoSelected="../../../assets/img/perfil_base.jpg";
    }

  ngOnInit(): void {
    this.form = this.crearFormGroup();
    this.usuarioService.getUsuario(this.id).subscribe(response =>{
      this.usuario=response;
    });
  }

  crearFormGroup():FormGroup{
    return new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      estado: new FormControl(),
    });
  }

  crearPerfil():void{
    this.perfil={
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estado: this.form.value.estado,
      imgPerfil: this.file.name,
      urlPerfil: this.urlEndPoint + "/",
      usuario: this.usuario
    }
    this.perfilService.create(this.perfil).subscribe(response =>{
      console.log(response);
    }
    );
    this.router.navigate(['login']);
  }

  capturar(event: any):void{
    const archivoCapturado = event.target.files[0];
    this.file= archivoCapturado;
    console.log(this.file);
    this.subirArchivo();
  }

  subirArchivo(): any{
    this.fileService.create(this.file!).subscribe(response => {
      console.log(response);
      this.fileService.getAll().subscribe(response =>{
        console.log(response);
        this.photoSelected=this.urlEndPoint+"/"+this.file.name;
      });
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
