import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/models/proyecto';
import { ProyectoService } from 'src/app/service/proyectoService';


@Component({
  selector: 'app-crear-proy',
  templateUrl: './crear-proy.component.html',
  styleUrls: ['./crear-proy.component.css']
})
export class CrearProyComponent implements OnInit {

  imagenProy='';
  tituloProy='';
  descripcion='';
  link='';


  constructor(

  private proyectoService: ProyectoService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.imagenProy, this.tituloProy, this.descripcion, this.link);
    this.proyectoService.agregarProyecto(proyecto).subscribe(
      data => {
        
        this.router.navigate(['/portfolio']);
      })
      
    
  }

}
