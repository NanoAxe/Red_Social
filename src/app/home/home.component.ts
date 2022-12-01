import { Component, OnInit } from '@angular/core';
import { Publicaciones } from '../models/publicaciones';
import { PublicacionesService } from '../services/publicaciones.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lista: Publicaciones[] | undefined;
  usuario: Usuarios | undefined;
  id!: number;
  constructor(
    private publicService : PublicacionesService,
    activateroute : ActivatedRoute,
    private UsuariosService: UsuariosService
     ) 
     {
    this.id = activateroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones(){
    this.publicService.getAll().subscribe(response =>{
      this.lista=response;
    });
    console.log(this.lista);
    this.UsuariosService.getUsuario(this.id).subscribe(response =>{
      this.usuario=response;
      console.log(this.usuario);
    })
  }
  
}
