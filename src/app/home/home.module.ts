import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    PerfilComponent,
    HomeComponent,
    PublicacionesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    PerfilComponent,
    PublicacionesComponent
  ]
})
export class HomeModule { }
