import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  empresa='';
  imagenEx='';
  posicion='';
  tipoEmpleo='';
  comienzoEx='';
  finEx='';
  experienciaList: any;
  
  constructor(private datosexperiencia: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.datosexperiencia.verExperiencia().subscribe(data =>{
      console.log(data);
      this.experienciaList=data;
    });
  }
  borrarExperiencia(id: number) {
    this.datosexperiencia.borrarExperiencia(id).subscribe(
      data => {
        console.log(data);
        this.datosexperiencia.borrarExperiencia;
        this.ngOnInit();
      },
     
    );
  }
  
  onCreate(): void {
    const experiencia = new Experiencia(this.empresa, this.imagenEx, this.posicion, this.tipoEmpleo, this.comienzoEx, this.finEx);
    this.datosexperiencia.agregarExperiencia(experiencia).subscribe(
      data => {
        
        this.ngOnInit();
      })
      
    
  }
}

