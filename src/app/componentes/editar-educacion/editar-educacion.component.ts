import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EscuelaService } from 'src/app/service/escuelaService';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  editPostForm: FormGroup;
  id:number=0;
  escuela:any;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private builder: FormBuilder, private datosescuela: EscuelaService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      imagenEd: new FormControl('', []),
      institucion: new FormControl('', []),
      titulo: new FormControl('', []),
      estado: new FormControl('', []),
      comienzoEd: new FormControl('', []),
      finEd: new FormControl('', [])
    });
   

    this.datosescuela.postIdSource.subscribe(data => {
      this.id = data;
      if (this.id !== undefined) {
        this.datosescuela.buscarEscuela(this.id).subscribe(data => {
          this.escuela = data;
          
          if (this.editPostForm!=null && this.escuela!=null) {
            this.editPostForm.controls['imagenEd'].setValue(this.escuela.imagenEd);
            this.editPostForm.controls['institucion'].setValue(this.escuela.institucion);
            this.editPostForm.controls['titulo'].setValue(this.escuela.titulo);
            this.editPostForm.controls['estado'].setValue(this.escuela.estado);
            this.editPostForm.controls['comienzoEd'].setValue(this.escuela.comienzoEd);
            this.editPostForm.controls['finEd'].setValue(this.escuela.finEd);
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormEscuela() {
    let escuela = {
      'id': this.id,
      'imagenEd':this.editPostForm.get('imagenEd')?.value,
      'institucion':this.editPostForm.get('institucion')?.value,
      'titulo':this.editPostForm.get('titulo')?.value,
      'estado':this.editPostForm.get('estado')?.value,
      'comienzoEd':this.editPostForm.get('comienzoEd')?.value,
      'finEd':this.editPostForm.get('finEd')?.value,
   
    
    };

    this.datosescuela.editarEscuela(escuela).subscribe(
      data => {
        console.log(data);
        this.datosescuela.editarEscuela;
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
