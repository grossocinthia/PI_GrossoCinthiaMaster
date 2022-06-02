import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Escuela } from 'src/app/models/escuela';
import { EscuelaService } from 'src/app/service/escuelaService';




@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  escuelaList: any;
  institucion= '';
  titulo= '';
  imagenEd= '';
  comienzoEd= '';
  finEd= '';
  estado= '';
  constructor(private datosescuela: EscuelaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.datosescuela.verEscuela().subscribe(data =>{
      console.log(data);
      this.escuelaList=data;
    });
  }
  borrarEscuela(id: number) {
    this.datosescuela.borrarEscuela(id).subscribe(
      data => {
        console.log(data);
        this.datosescuela.borrarEscuela;
        this.ngOnInit();
      },
     
    );
  }
  onCreate(): void {
    const escuela = new Escuela(this.imagenEd, this.institucion, this.titulo, this.estado, this.comienzoEd, this.finEd);
    this.datosescuela.agregarEscuela(escuela).subscribe(
      data => {
        
        this.ngOnInit();
      })
      
    
  }

}

