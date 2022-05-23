import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Escuela } from 'src/app/models/escuela';
import { EscuelaService } from 'src/app/service/escuelaService';

@Component({
  selector: 'app-crear-ed',
  templateUrl: './crear-ed.component.html',
  styleUrls: ['./crear-ed.component.css']
})
export class CrearEdComponent implements OnInit {
  institucion= '';
  titulo= '';
  imagenEd= '';
  comienzoEd= '';
  finEd= '';
  estado= '';


  constructor(
    private escuelaService: EscuelaService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  onCreate(): void {
    const escuela = new Escuela(this.imagenEd, this.institucion, this.titulo, this.estado, this.comienzoEd, this.finEd);
    this.escuelaService.agregarEscuela(escuela).subscribe(
      data => {
        
        this.router.navigate(['/portfolio']);
      })
      
    
  }

}