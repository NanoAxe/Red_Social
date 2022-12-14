import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogueoComponent } from './logueo/logueo.component';
import { CrearPerfilComponent } from './crear-perfil/crear-perfil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    RegistrarComponent,
    LogueoComponent,
    CrearPerfilComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    RegistrarComponent,
    LogueoComponent,
    CrearPerfilComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
