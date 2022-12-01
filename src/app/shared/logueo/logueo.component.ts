import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { Usuarios } from '../../models/usuarios';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  registroUsuarios!: Usuarios[];
  user?: Usuarios;
  form!: FormGroup;

  constructor(private usuarioService: UsuariosService, private router:Router) { }

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
    this.user = this.registroUsuarios.find(e => e.usuario===this.user?.usuario && e.password===this.user?.password)
    if(this.user){
      console.log("si funciona");
      this.LogueoExito(this.user?.idUsuario);
    }else{
      console.log("no funciono");
    }
  }

  LogueoExito(id: number | undefined):void{
    this.router.navigate(['/home',id]);
  }
}
