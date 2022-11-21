import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  user: Usuarios | undefined;
  form!:FormGroup;

  constructor( private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.form=this.crearFormGroup();
    console.log(this.usuarioService.getUsuarios());
  }

  crearFormGroup():FormGroup{
    return new FormGroup({
      usuario: new FormControl("hola"),
      correo: new FormControl(),
      password: new FormControl(),
    });
  }  
  
  crearUsuario():void{
    this.user={
      usuario: this.form.value.usuario,
      correo: this.form.value.correo,
      password: this.form.value.password
    }
    console.log(this.user);
    this.usuarioService.crearUsuario(this.user).subscribe(response =>{
      console.log(response);
    }
    );
    
  }
}
