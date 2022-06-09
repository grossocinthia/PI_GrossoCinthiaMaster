import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SkillService } from 'src/app/service/skill.service';



@Component({
  selector: 'app-editar-skill',
  templateUrl: './editar-skill.component.html',
  styleUrls: ['./editar-skill.component.css']
})
export class EditarSkillComponent implements OnInit {
 
  editPostForm: FormGroup;
  id:number=0;
  skill:any;

  event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private builder: FormBuilder, private datosSkill: SkillService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      nombreSkill: new FormControl('', []),
      percent: new FormControl('', []),
      
    });

  

    this.datosSkill.postIdSource.subscribe(data => {
      this.id = data;
      if (this.id !== undefined) {
        this.datosSkill.buscarSkill(this.id).subscribe(data => {
          this.skill = data;
          
          if (this.editPostForm!=null && this.skill!=null) {
            this.editPostForm.controls['nombreSkill'].setValue(this.skill.nombreSkill);
            this.editPostForm.controls['percent'].setValue(this.skill.percent);
            
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormSkill() {
    let skill = {
      'id': this.id,
      'nombreSkill':this.editPostForm.get('nombreSkill')?.value,
      'percent':this.editPostForm.get('percent')?.value,
     
    
    };

    this.datosSkill.editarSkill(skill).subscribe(
      data => {
        console.log(data);
        this.datosSkill.editarSkill;
        this.bsModalRef.hide();   
        location.reload();
        
    });
  }

  onClose() {
    this.bsModalRef.hide();
   
  }

  ngOnInit() {

  }
 
}
