import { Component, OnInit } from '@angular/core';

import { Usuarios } from '../../models/usuarios';
import { UsuariosService } from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css'],
})
export class RegistrarComponent implements OnInit {
  user?: Usuarios;
  form!: FormGroup;

  constructor(
    private usuarioService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.crearFormGroup();
  }

  crearFormGroup(): FormGroup {
    return new FormGroup({
      usuario: new FormControl(),
      correo: new FormControl(),
      password: new FormControl(),
    });
  }

  crearUsuario(): void {
    this.user = {
      usuario: this.form.value.usuario,
      correo: this.form.value.correo,
      password: this.form.value.password,
    };
    this.usuarioService.crearUsuario(this.user).subscribe((response) => {
      console.log('Usuario creado con exito: ' + response);
      this.irA(response.idUsuario);
    });
  }

  irA(id: number | undefined): void {
    this.router.navigate(['crearPerfil', id]);
  }
}
