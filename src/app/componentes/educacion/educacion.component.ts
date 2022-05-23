import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscuelaService } from 'src/app/service/escuelaService';




@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  
  escuelaList: any;
  
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
  

}

