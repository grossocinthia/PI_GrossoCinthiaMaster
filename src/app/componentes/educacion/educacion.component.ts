import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Escuela } from 'src/app/models/escuela';
import { EscuelaService } from 'src/app/service/escuelaService';
import { TokenService } from 'src/app/service/token-service.service';
import { EditarEducacionComponent } from '../editar-educacion/editar-educacion.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  bsModalRef: BsModalRef | undefined;
  result:any;
  escuela:any;
  escuelaList: any;
  institucion= '';
  titulo= '';
  imagenEd= '';
  comienzoEd= '';
  finEd= '';
  estado= '';
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  constructor(private tokenService: TokenService, private bsModalService: BsModalService, private datosescuela: EscuelaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.datosescuela.verEscuela().subscribe(data =>{
      console.log(data);
      this.escuelaList=data;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  borrarEscuela(id: number) {
    this.datosescuela.borrarEscuela(id).subscribe(
      data => {
        console.log(data);
        this.datosescuela.borrarEscuela;
        this.ngOnInit();
      },
     
    );
  }
  onCreate(): void {
    const escuela = new Escuela(this.imagenEd, this.institucion, this.titulo, this.estado, this.comienzoEd, this.finEd);
    this.datosescuela.agregarEscuela(escuela).subscribe(
      data => {
        
        this.ngOnInit();
      })
      
    
  }
  editPost(id: number) {
    this.datosescuela.changePostId(id);
  
    this.bsModalRef = this.bsModalService.show(EditarEducacionComponent);
    this.bsModalRef.content.event.subscribe((result: string) => {
      if (result == 'OK') {
        setTimeout(() => {
          this.datosescuela.verEscuela();
        }, 5000);
      }
    });
  }
}

