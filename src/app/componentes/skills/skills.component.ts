import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit {

  nombreSkill='';
  percent='';
  skillList: any;
  
  constructor(private datosSkill: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.datosSkill.verSkill().subscribe(data =>{
      console.log(data);
      this.skillList=data;
    });
  }
  borrarSkill(id: number) {
    this.datosSkill.borrarSkill(id).subscribe(
      data => {
        console.log(data);
        this.datosSkill.borrarSkill;
        this.ngOnInit();
      },
     
    );
  }
  
  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.percent);
    this.datosSkill.agregarSkill(skill).subscribe(
      data => {
        
        this.ngOnInit();
      })
      
    
  }
}


