import { Component, OnInit } from '@angular/core';
import { Publicaciones } from '../../models/publicaciones';
import { PublicacionesService } from '../../services/publicaciones.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {
  lista: Publicaciones[] | undefined;

  constructor(private publicService : PublicacionesService) { }

  ngOnInit(): void {
    this.cargarPublicaciones();
  }

  cargarPublicaciones(){
    this.publicService.getAll().subscribe(response =>{
      this.lista=response;
    });
  }

}
