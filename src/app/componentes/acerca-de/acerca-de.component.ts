import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/personaService';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  Persona:any;
  bsModalRef: BsModalRef | undefined;
  result:any;

  constructor(private bsModalService: BsModalService, 
    private datospersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) {

     
   this.datospersona.verPersona().subscribe(
    data => {
      console.log(data);
      this.Persona = data[0];
    },
   
  ); }

  ngOnInit(): void {
  }
  
  
editPost(id: number) {
  this.datospersona.changePostId(id);

  this.bsModalRef = this.bsModalService.show(EditarPerfilComponent);
  this.bsModalRef.content.event.subscribe((result: string) => {
    if (result == 'OK') {
      setTimeout(() => {
        this.datospersona.verPersona();
      }, 5000);
    }
  });
}

  
}

