import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EscuelaService } from 'src/app/service/escuelaService';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {


  escuelaList: any ;
  id:number=0;

  

  constructor(private datosescuela: EscuelaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 

    this.id= Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.datosescuela.buscarEscuela(this.id).subscribe(data =>{
      console.log(data);
      this.escuelaList=data ;
      
    });
      }
    
      onUpdate(id: number) {
        this.datosescuela.editarEscuela(id, this.escuelaList).subscribe(
          data => {
            console.log(data);
            this.datosescuela.editarEscuela;
            this.ngOnInit();
        this.router.navigate(['/portfolio']);
      },
     
    );
  }

}