import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-crear-skill',
  templateUrl: './crear-skill.component.html',
  styleUrls: ['./crear-skill.component.css']
})
export class CrearSkillComponent implements OnInit {

  nombreSkill='';
  percent='';

  constructor(
  private skillService: SkillService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.percent);
    this.skillService.agregarSkill(skill).subscribe(
      data => {
        
        this.router.navigate(['/portfolio']);
      })
      
    
  }

}
