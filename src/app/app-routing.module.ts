import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './shared/registrar/registrar.component';
import { LogueoComponent } from './shared/logueo/logueo.component';

const routes: Routes = [
  {path:'registrarse', component: RegistrarComponent},
  {path:'login', component: LogueoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
