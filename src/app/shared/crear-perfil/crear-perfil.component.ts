import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PerfilesService } from 'src/app/services/perfiles.service';
import { Perfiles } from '../../models/perfiles';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { read } from 'fs';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-crear-perfil',
  templateUrl: './crear-perfil.component.html',
  styleUrls: ['./crear-perfil.component.css']
})
export class CrearPerfilComponent implements OnInit {

  perfil: Perfiles | undefined;
  form!:FormGroup;
  id!: number;
  usuario!: Usuarios;
  file: File | undefined;
  photoSelected!: string | ArrayBuffer | null;

  constructor(private perfilService: PerfilesService,
    activateroute : ActivatedRoute,
    private usuarioService: UsuariosService
    ) {
      this.id = activateroute.snapshot.params['id'];
     }

  ngOnInit(): void {
    this.crearFormGroup();
    this.usuarioService.getUsuario(this.id).subscribe(response =>{
      this.usuario=response;
      console.log(this.usuario);
    })
  }

  crearFormGroup():FormGroup{
    return new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      estado: new FormControl(),
      img: new FormControl()
    });
  }

  crearPerfil():void{
    this.perfil={
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      estado: this.form.value.estado,
      nombreFoto: this.form.value.img,
      usuario: this.usuario
    }
    console.log(this.perfil);
    this.perfilService.create(this.perfil).subscribe(response =>{
      console.log(response);
    }
    );
  }

  onPhotoSelected(event: HtmlInputEvent):void{
    if(event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //img preview
      const reader= new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }
  

}
