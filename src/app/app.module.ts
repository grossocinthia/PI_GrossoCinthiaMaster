import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpClientModule} from '@angular/common/http';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component'; 
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { FormsModule }   from '@angular/forms';
import { BarraComponent } from './componentes/barra/barra.component';
import { interceptorProvider } from './interceptor/personaInterceptorService';
import { CrearEdComponent } from './componentes/crear-ed/crear-ed.component';
import { CrearExComponent } from './componentes/crear-ex/crear-ex.component';
import { CrearProyComponent } from './componentes/crear-proy/crear-proy.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { EditarEducacionComponent } from './componentes/editar-educacion/editar-educacion.component';
import { EditarExperienciaComponent } from './componentes/editar-experiencia/editar-experiencia.component';
import { EditarProyectoComponent } from './componentes/editar-proyecto/editar-proyecto.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    PortfolioComponent,
    LoginComponent,
    RegistroComponent,
    BarraComponent,
    CrearEdComponent,
    CrearExComponent,
    CrearProyComponent,
    EditarPerfilComponent,
    EditarEducacionComponent,
    EditarExperienciaComponent,
    EditarProyectoComponent
  ],

  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [interceptorProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
