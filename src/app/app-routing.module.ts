import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';



const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent},
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
 
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }