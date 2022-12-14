import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Perfiles } from '../../models/perfiles';
import { PerfilesService } from '../../services/perfiles.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  @Input() id!: number;
  perfil: Perfiles | undefined;
  registroPerfiles!: Perfiles[];

  constructor(private perfilService: PerfilesService) { 
    this.cargarPerfiles();
  }

  ngOnInit(): void {
    this.buscarPerfil();
    console.log(this.perfil);
  }

  cargarPerfiles():void {
    this.perfilService.getAll().subscribe(response =>{
      console.log(response);
      this.registroPerfiles=response;
  });
  }

  buscarPerfil(): void {
    this.perfil = this.registroPerfiles.find(e => 
      e.usuario?.idUsuario == this.id);
      console.log("se encontro el perfil "+ this.perfil);
  }

}
