import { Component, Input, OnInit} from '@angular/core';

import { Perfiles } from '../../models/perfiles';
import { PerfilesService } from '../../services/perfiles.service';
import { Router } from '@angular/router';
import { URL_BACKENDFILES } from '../../config/config';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})

export class PerfilComponent implements OnInit {
  
  @Input() id: number = 0;
  perfil: Perfiles | undefined;
  registroPerfiles!: Perfiles[];
  private urlPerfil: string =URL_BACKENDFILES;

  constructor(
    private perfilService: PerfilesService,
    private router: Router
    ) {
    this.cargarPerfiles();
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.buscarPerfil();
    console.log(this.perfil);
  }

  cargarPerfiles(): void {
    this.perfilService.getAll().subscribe(response => {
      this.registroPerfiles = response;
      //console.log(response);
      this.buscarPerfil();
    });
  }

  buscarPerfil(): void {
    this.perfil = this.registroPerfiles.find(e => e.usuario?.idUsuario == this.id);
    this.perfil!.urlPerfil=this.urlPerfil + "/"+ this.perfil?.imgPerfil;
  }
  
  irA():void{
    this.router.navigate(['cambiarDatos', this.perfil?.idPerfil]);
    this.buscarPerfil();
  }

}
