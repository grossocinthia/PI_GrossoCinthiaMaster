import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ExperienciaService } from 'src/app/service/experienciaService';


@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  
  editPostForm: FormGroup;


  id:number=0;
  experiencia:any;

  event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private builder: FormBuilder, private datosexperiencia: ExperienciaService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      empresa: new FormControl('', []),
      imagenEx: new FormControl('', []),
      posicion: new FormControl('', []),
      tipoEmpleo: new FormControl('', []),
      comienzoEx: new FormControl('', []),
      finEx: new FormControl('', [])
    });

  

    this.datosexperiencia.postIdSource.subscribe(data => {
      this.id = data;
      if (this.id !== undefined) {
        this.datosexperiencia.buscarExperiencia(this.id).subscribe(data => {
          this.experiencia = data;
          
          if (this.editPostForm!=null && this.experiencia!=null) {
            this.editPostForm.controls['empresa'].setValue(this.experiencia.empresa);
            this.editPostForm.controls['imagenEx'].setValue(this.experiencia.imagenEx);
            this.editPostForm.controls['posicion'].setValue(this.experiencia.posicion);
            this.editPostForm.controls['tipoEmpleo'].setValue(this.experiencia.tipoEmpleo);
            this.editPostForm.controls['comienzoEx'].setValue(this.experiencia.comienzoEx);
            this.editPostForm.controls['finEx'].setValue(this.experiencia.finEx);
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormExperiencia() {
    let experiencia = {
      'id': this.id,
      'empresa':this.editPostForm.get('empresa')?.value,
      'posicion':this.editPostForm.get('posicion')?.value,
      'tipoEmpleo':this.editPostForm.get('tipoEmpleo')?.value,
      'comienzoEx':this.editPostForm.get('comienzoEx')?.value,
      'finEx':this.editPostForm.get('finEx')?.value,
      'imagenEx':this.editPostForm.get('imagenEx')?.value,
    
    };

    this.datosexperiencia.editarExperiencia(experiencia).subscribe(
      data => {
        console.log(data);
        this.datosexperiencia.editarExperiencia;
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
