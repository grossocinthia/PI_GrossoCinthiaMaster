import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ProyectoService } from 'src/app/service/proyectoService';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  
  editPostForm: FormGroup;
  id:number=0;
  proyecto:any;

  event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private builder: FormBuilder, private datosproyecto: ProyectoService, private bsModalRef: BsModalRef) {
    
    this.editPostForm = this.builder.group({
      imagenProy: new FormControl('', []),
      tituloProy: new FormControl('', []),
      descripcion: new FormControl('', []),
      link: new FormControl('', [])
    });

    this.datosproyecto.postIdSource.subscribe(data => {
      this.id = data;
      if (this.id !== undefined) {
        this.datosproyecto.buscarProyecto(this.id).subscribe(data => {
          this.proyecto = data;
          
          if (this.editPostForm!=null && this.proyecto!=null) {
            this.editPostForm.controls['imagenProy'].setValue(this.proyecto.imagenProy);
            this.editPostForm.controls['tituloProy'].setValue(this.proyecto.tituloProy);
            this.editPostForm.controls['descripcion'].setValue(this.proyecto.descripcion);
            this.editPostForm.controls['link'].setValue(this.proyecto.link);
            
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormProyecto() {
    let proyecto = {
      'id': this.id,
      'imagenProy':this.editPostForm.get('imagenProy')?.value,
      'tituloProy':this.editPostForm.get('tituloProy')?.value,
      'descripcion':this.editPostForm.get('descripcion')?.value,
      'link':this.editPostForm.get('link')?.value,
 
    
    };

    this.datosproyecto.editarProyecto(proyecto).subscribe(
      data => {
        console.log(data);
        this.datosproyecto.editarProyecto;
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
