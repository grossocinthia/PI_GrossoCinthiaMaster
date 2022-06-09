import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/personaService';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  editPostForm: FormGroup;
  id:number=0;
  persona:any;
  event: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router, private builder: FormBuilder, private datospersona: PersonaService, private bsModalRef: BsModalRef) {
    this.editPostForm = this.builder.group({
      nombreCompleto: new FormControl('', []),
      telefono: new FormControl('', []),
      imagen: new FormControl('', []),
      backimagen: new FormControl('', []),
      titulos: new FormControl('', []),
      ubicacion: new FormControl('', []),
      acerca: new FormControl('', [])
    });
  
    this.datospersona.postIdSource.subscribe(data => {
      this.id = data;
      if (this.id !== undefined) {
        this.datospersona.buscarPersona(this.id).subscribe(data => {
          this.persona = data;
          
          if (this.editPostForm!=null && this.persona!=null) {
            this.editPostForm.controls['nombreCompleto'].setValue(this.persona.nombreCompleto);
            this.editPostForm.controls['telefono'].setValue(this.persona.telefono);
            this.editPostForm.controls['imagen'].setValue(this.persona.imagen);
            this.editPostForm.controls['backimagen'].setValue(this.persona.backimagen);
            this.editPostForm.controls['titulos'].setValue(this.persona.titulos);
            this.editPostForm.controls['ubicacion'].setValue(this.persona.ubicacion);
            this.editPostForm.controls['acerca'].setValue(this.persona.acerca);
          }
        }, error => { console.log("Error while gettig post details") });
      }
    });
  }

  onPostEditFormPerfil() {
    let persona= {
      'id': this.id,
      'nombreCompleto':this.editPostForm.get('nombreCompleto')?.value,
      'telefono':this.editPostForm.get('telefono')?.value,
      'imagen':this.editPostForm.get('imagen')?.value,
      'backimagen':this.editPostForm.get('backimagen')?.value,
      'titulos':this.editPostForm.get('titulos')?.value,
      'ubicacion':this.editPostForm.get('ubicacion')?.value,
      'acerca':this.editPostForm.get('acerca')?.value,
    };

    this.datospersona.editarPersona(persona).subscribe(
      data => {
        console.log(data);
        this.datospersona.editarPersona;
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
