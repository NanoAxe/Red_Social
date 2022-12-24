import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PerfilesService } from '../../services/perfiles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { Perfiles } from '../../models/perfiles';
import { UploadFilesService } from 'src/app/services/upload-files.service';
import { URL_BACKENDFILES } from '../../config/config';

@Component({
  selector: 'app-cambiar-datos',
  templateUrl: './cambiar-datos.component.html',
  styleUrls: ['./cambiar-datos.component.css']
})
export class CambiarDatosComponent implements OnInit {

  private urlEndPoint: string = URL_BACKENDFILES;
  user!: Usuarios;
  perfil!: Perfiles;
  form!:FormGroup;
  id!: number;
  file!: File;
  photoSelected!: String | undefined;

  constructor(
    private perfilService: PerfilesService,
    activateRoute : ActivatedRoute,
    private usuarioService: UsuariosService,
    private router: Router,
    private fileService: UploadFilesService
  ) { 
    this.id = activateRoute.snapshot.params['id'];
    this.perfilService.get(this.id).subscribe(response =>{
      this.perfil=response;
      this.user=response.usuario!;
      this.form=this.crearFormGroup();
    });
  }

  ngOnInit(): void {
    this.photoSelected=this.perfil.urlPerfil;
  }

  crearFormGroup(): FormGroup {
    return new FormGroup({
      usuario: new FormControl(this.user.usuario),
      correo: new FormControl(this.user.correo),
      passwordOld: new FormControl(),
      passwordNew: new FormControl(),
      nombre: new FormControl(this.perfil.nombre),
      apellido: new FormControl(this.perfil.apellido),
      estado: new FormControl(this.perfil.estado)
    });
  }

  verificar():void{
    console.log("Perfil: "+this.perfil.apellido + "Usuario: "+ this.user.password) ;
    if(this.form.value.passwordOld === this.user.password){
      this.actualizar();
      this.irA();
    }else{
      alert("La contraseña antigua no coincide");
    }
  }

  actualizar():void{
    this.user = {
      idUsuario: this.user.idUsuario,
      usuario: this.form.value.usuario,
      correo: this.form.value.correo,
      password: this.form.value.passwordNew,
    };
    this.perfil={
      idPerfil: this.perfil.idPerfil,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estado: this.form.value.estado,
      usuario: this.user
    }
    this.usuarioService.updateUsuario(this.user,this.user.idUsuario!).subscribe(response =>{
      console.log(response);
    });
    this.perfilService.update(this.perfil,this.perfil.idPerfil!).subscribe(response =>{
      console.log(response);
    });
  }

  irA():void{
    this.router.navigate(['home', this.user.idUsuario]);
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
  }

}
