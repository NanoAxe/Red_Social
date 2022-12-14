import { Component, OnInit } from '@angular/core';
import { Publicaciones } from '../models/publicaciones';
import { PublicacionesService } from '../services/publicaciones.service';
import { ActivatedRoute } from '@angular/router';
import { Usuarios } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { Perfiles } from '../models/perfiles';
import { PerfilesService } from '../services/perfiles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id!: number;

  constructor(private activateRoute : ActivatedRoute) 
  {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {  }

  
  
}
