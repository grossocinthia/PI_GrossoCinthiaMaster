import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaService } from 'src/app/service/experienciaService';


@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experienciaList: any ;
  id:number=0;

  

  constructor(private datosexperiencia: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 

    this.id= Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.datosexperiencia.buscarExperiencia(this.id).subscribe(data =>{
      console.log(data);
      this.experienciaList=data ;
      
    });
      }
    
      onUpdate(id: number) {
        this.datosexperiencia.editarExperiencia(id, this.experienciaList).subscribe(
          data => {
            console.log(data);
            this.datosexperiencia.editarExperiencia;
            this.ngOnInit();
        this.router.navigate(['/portfolio']);
      },
     
    );
  }

}