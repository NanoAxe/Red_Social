import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';

@NgModule({
  declarations: [
    PerfilComponent,
    HomeComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PerfilComponent
  ]
})
export class HomeModule { }
