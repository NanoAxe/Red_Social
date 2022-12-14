import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './shared/registrar/registrar.component';
import { LogueoComponent } from './shared/logueo/logueo.component';
import { PerfilComponent } from './home/perfil/perfil.component';
import { HomeComponent } from './home/home.component';
import { CrearPerfilComponent } from './shared/crear-perfil/crear-perfil.component';
import { TestFilesComponent } from './test-files/test-files.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {path: '', component: LogueoComponent},
  {path: 'registrarse', component: RegistrarComponent},
  {path: 'login', component: LogueoComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'crearPerfil/:id', component: CrearPerfilComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'testFiles', component: TestFilesComponent},
  {path: 'chat/:usuario', component: ChatComponent},
  {path: 'test', component: TestFilesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
