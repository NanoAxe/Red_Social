import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { HomeComponent } from './home.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ComentariosComponent } from './comentarios/comentarios.component';

@NgModule({
  declarations: [
    PerfilComponent,
    HomeComponent,
    PublicacionesComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,    
  ],
  exports: [
    PerfilComponent,
    PublicacionesComponent,
    ComentariosComponent
  ]
})
export class HomeModule { }
