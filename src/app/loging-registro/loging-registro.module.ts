import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { LogueoComponent } from './logueo/logueo.component';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { CambiarDatosComponent } from './cambiar-datos/cambiar-datos.component';

@NgModule({
  declarations: [
    RegistrarComponent,
    LogueoComponent,
    CrearPerfilComponent,
    CambiarDatosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    RegistrarComponent,
    LogueoComponent,
    CrearPerfilComponent,
    CambiarDatosComponent
  ]
})
export class LogingRegistroModule { }
