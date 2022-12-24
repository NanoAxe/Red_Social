import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { FormGroup, FormControl } from '@angular/forms';
import { userChat } from '../models/userChat';
import { listaMensajes } from './mensajes';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  emisor: string | undefined;
  listChat: userChat[] = [];
  mensaje: userChat | undefined;

  constructor(
    private activateRoute:  ActivatedRoute,
    private usuarioService: UsuariosService
    ){
      this.id = activateRoute.snapshot.params['id'];
      this.form = this.crearFormGroup();
    this.usuarioService.getUsuario(this.id).subscribe(response =>{
      this.emisor=response.usuario;
    });
    
    }

  ngOnInit(): void {
    this.cargarMensajes();
    
  }

  crearFormGroup():FormGroup{
    return new FormGroup({
      texto: new FormControl()
    });
  }

  cargarMensajes():void{
    this.listChat=listaMensajes;
  }

  enviar(){
    this.mensaje={
      nombre: this.emisor,
      texto: this.form.value.texto
    }
    console.log(this.mensaje.nombre);
    console.log(this.mensaje.texto);
    listaMensajes.push(this.mensaje);
    console.log(this.listChat);
    this.form=this.crearFormGroup();
  }

}
