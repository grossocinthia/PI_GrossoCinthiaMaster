import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CrearEdComponent } from './componentes/crear-ed/crear-ed.component';
import { CrearExComponent } from './componentes/crear-ex/crear-ex.component';
import { CrearProyComponent } from './componentes/crear-proy/crear-proy.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { EditarProyectoComponent } from './componentes/editar-proyecto/editar-proyecto.component';





import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crearEd', component: CrearEdComponent},
  { path: 'crearEx', component: CrearExComponent},
  { path: 'crearProy', component: CrearProyComponent},
  { path: 'editarProy/:id', component: EditarProyectoComponent},
  { path: 'editarPerfil/:id', component: EditarPerfilComponent},
  { path: 'editarEx/:id', component: EditarExperienciaComponent},
  { path: 'editarEd/:id', component: EditarEducacionComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }