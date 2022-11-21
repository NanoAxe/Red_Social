import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrarComponent } from './registrar/registrar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogueoComponent } from './logueo/logueo.component';



@NgModule({
  declarations: [
    RegistrarComponent,
    LogueoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    RegistrarComponent
  ]
})
export class SharedModule { }
