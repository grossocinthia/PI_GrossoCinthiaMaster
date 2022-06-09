import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Skill } from 'src/app/models/skill';
import { SkillService } from 'src/app/service/skill.service';
import { EditarSkillComponent } from '../editar-skill/editar-skill.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent  implements OnInit {

  nombreSkill='';
  percent='';
  skillList: any;
  bsModalRef: BsModalRef | undefined;
  result:any;
  skill:any;

  constructor(private bsModalService: BsModalService, private datosSkill: SkillService, private activatedRoute: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
  this.datosSkill.verSkill().subscribe(data =>{
      console.log(data);
      this.skillList=data;
    });
  }
 
  
  onCreate(): void {
    const skill = new Skill(this.nombreSkill, this.percent);
    this.datosSkill.agregarSkill(skill).subscribe(
      data => {
        
        this.ngOnInit();
      })
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
  
editPost(id: number) {
  this.datosSkill.changePostId(id);

  this.bsModalRef = this.bsModalService.show(EditarSkillComponent);
  this.bsModalRef.content.event.subscribe((result: string) => {
    if (result == 'OK') {
      setTimeout(() => {
        this.datosSkill.verSkill();
      }, 5000);
    }
  });
}

}

