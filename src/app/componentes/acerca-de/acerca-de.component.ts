import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/service/personaService';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  Persona:any;

  constructor(
    private datospersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) {

     
   this.datospersona.verPersona().subscribe(
    data => {
      console.log(data);
      this.Persona = data[0];
    },
   
  ); }

  ngOnInit(): void {
  }

  
}

