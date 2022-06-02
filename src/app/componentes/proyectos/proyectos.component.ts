import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyectoService';
import { Proyecto } from 'src/app/models/proyecto';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  
  proyectoList: any;
  imagenProy='';
  tituloProy='';
  descripcion='';
  link='';
  
  constructor(private datosproyecto: ProyectoService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit(): void {
  this.datosproyecto.verProyecto().subscribe(data =>{
      console.log(data);
      this.proyectoList=data;
    });
   
    }
  
 
  borrarProyecto(id: number) {
    this.datosproyecto.borrarProyecto(id).subscribe(
      data => {
        console.log(data);
        this.datosproyecto.borrarProyecto;
        this.ngOnInit();
      },
     
    );
  }
  onCreate(): void {
    const proyecto = new Proyecto(this.imagenProy, this.tituloProy, this.descripcion, this.link);
    this.datosproyecto.agregarProyecto(proyecto).subscribe(
      data => {
        
        this.ngOnInit();
        
      })
      
    
  }
}




