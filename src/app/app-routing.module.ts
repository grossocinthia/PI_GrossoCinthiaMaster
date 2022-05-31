import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CrearEdComponent } from './componentes/crear-ed/crear-ed.component';
import { CrearExComponent } from './componentes/crear-ex/crear-ex.component';
import { CrearProyComponent } from './componentes/crear-proy/crear-proy.component';
import { CrearSkillComponent } from './componentes/crear-skill/crear-skill.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { EditarProyectoComponent } from './componentes/editar-proyecto/editar-proyecto.component';
import { EditarSkillComponent } from './componentes/editar-skill/editar-skill.component';





import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './guards/guard.guard';
import { GuardsGuard } from './service/guards.guard';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'login', component: LoginComponent },
  { path: 'crearEd', component: CrearEdComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'crearEx', component: CrearExComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'crearProy', component: CrearProyComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'editarProy/:id', component: EditarProyectoComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'editarPerfil/:id', component: EditarPerfilComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'editarEx/:id', component: EditarExperienciaComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'editarEd/:id', component: EditarEducacionComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'crearSkill', component: CrearSkillComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'editarSkill/:id', component:EditarSkillComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},

  { path: '', redirectTo: '/login', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }