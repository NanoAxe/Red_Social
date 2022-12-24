import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './loging-registro/registrar/registrar.component';
import { LogueoComponent } from './loging-registro/logueo/logueo.component';
import { PerfilComponent } from './home/perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { CrearPerfilComponent } from './loging-registro/crear-perfil/crear-perfil.component';
import { TestFilesComponent } from './test-files/test-files.component';
import { ChatComponent } from './chat/chat.component';
import { CambiarDatosComponent } from './loging-registro/cambiar-datos/cambiar-datos.component';

const routes: Routes = [
  {path: '', component: LogueoComponent},
  {path: 'registrarse', component: RegistrarComponent},
  {path: 'login', component: LogueoComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  {path: 'crearPerfil/:id', component: CrearPerfilComponent},
  {path: 'cambiarDatos/:id', component: CambiarDatosComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'testFiles', component: TestFilesComponent},
  {path: 'chat/:id', component: ChatComponent},
  {path: 'test', component: TestFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
