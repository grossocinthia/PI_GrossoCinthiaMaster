import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {

  

  skillList: any ;
  id:number=0;

  

  constructor(private datosSkill: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { 

    this.id= Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.datosSkill.buscarSkill(this.id).subscribe(data =>{
      console.log(data);
      this.skillList=data ;
      
    });
      }
    
      onUpdate(id: number) {
        this.datosSkill.editarSkill(id, this.skillList).subscribe(
          data => {
            console.log(data);
            this.datosSkill.editarSkill;
            this.ngOnInit();
        this.router.navigate(['/portfolio']);
      },
     
    );
  }

}