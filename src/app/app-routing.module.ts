import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardsGuard } from './service/guards.guard';


const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canActivate: [GuardsGuard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'login', component: LoginComponent },
 
  { path: '', redirectTo: '/login', pathMatch: 'full' },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }