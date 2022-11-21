import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  registroUsuarios: Usuarios[] | undefined;
  user: Usuarios | undefined;
  form!: FormGroup;

  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
    this.form=this.crearFormGroup();
  }

  cargarUsuarios(){
    this.usuarioService.getUsuarios().subscribe(response =>{
      this.registroUsuarios=response;
    });
  }

  crearFormGroup():FormGroup{
    return new FormGroup({
      usuario: new FormControl(),
      password: new FormControl()
    });
  } 

  loguear(){
    this.user={
      usuario: this.form.value.usuario,
      password: this.form.value.password
    }
    if(this.registroUsuarios?.findIndex(
      e => e.usuario===this.user?.usuario && e.password===this.user?.password)!=-1){
        console.log("si funciona");
    }else{
      console.log("no se encontro");
    }
  }
}
