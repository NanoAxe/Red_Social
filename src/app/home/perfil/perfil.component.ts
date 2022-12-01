import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  idUsuario: number | undefined;
  perfil: Usuarios | undefined;
  constructor(private activateroute: ActivatedRoute, private userService:UsuariosService) { 
    this.idUsuario= activateroute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  cargarPerfil(): void{
    this.userService.getUsuarios().subscribe(response =>{
      
    });
  }

}
