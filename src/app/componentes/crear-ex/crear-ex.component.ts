import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';

@Component({
  selector: 'app-crear-ex',
  templateUrl: './crear-ex.component.html',
  styleUrls: ['./crear-ex.component.css']
})
export class CrearExComponent implements OnInit {

  empresa='';
  imagenEx='';
  posicion='';
  tipoEmpleo='';
  comienzoEx='';
  finEx='';
  


  constructor(
    private experienciaService: ExperienciaService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.empresa, this.imagenEx, this.posicion, this.tipoEmpleo, this.comienzoEx, this.finEx);
    this.experienciaService.agregarExperiencia(experiencia).subscribe(
      data => {
        
        this.router.navigate(['/portfolio']);
      })
      
    
  }

}