import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Comentarios } from '../../models/comentarios';
import { ComentariosService } from '../../services/comentarios.service';
import { UsuariosService } from '../../services/usuarios.service';
import { PublicacionesService } from '../../services/publicaciones.service';
import { Usuarios } from '../../models/usuarios';
import { Publicaciones } from '../../models/publicaciones';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  @Input() idUser: number = 0;
  @Input() idPublic: number | undefined;
  form!: FormGroup;
  lista: Comentarios[] | undefined;
  miComentario!: Comentarios;
  usuario: Usuarios | undefined;
  public: Publicaciones | undefined;

  constructor(
    private comentService: ComentariosService,
    private publicService: PublicacionesService,
    private usuarioService: UsuariosService
  ) {
    this.form = this.crearFormGroup();
  }

  ngOnInit(): void {
    this.cargarComentarios();
  }

  ngOnChanges(): void {
    this.usuarioService.getUsuario(this.idUser).subscribe((response) => {
      this.usuario = response;
    });
    this.publicService.get(this.idPublic!).subscribe((response) => {
      this.public = response;
    });
  }

  crearFormGroup(): FormGroup {
    return new FormGroup({
      comentario: new FormControl(""),
    });
  }

  cargarComentarios() {
    this.comentService.getAll().subscribe(response => {
      this.lista=response;
    });
  }

  crearComentario(): void {
    this.miComentario = {
      contenido: this.form.value.comentario,
      publicacion: this.public,
      usuario: this.usuario,
    };
    console.log('El comentario se creo: ' + this.miComentario);
    this.comentar();
  }

  comentar(): void {
    this.comentService.create(this.miComentario).subscribe((response) => {
      console.log(response);
    });
    this.form=this.crearFormGroup();
    this.cargarComentarios();
    this.cargarComentarios();
  }
}
