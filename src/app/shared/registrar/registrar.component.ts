import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Usuarios } from '../../models/usuarios';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  user: Usuarios | undefined;
  form!:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form=this.crearFormGroup();
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
      idUsuario: undefined,
      Usuario: this.form.value.usuario,
      correo: this.form.value.correo,
      password: this.form.value.password
    }
  }
}
