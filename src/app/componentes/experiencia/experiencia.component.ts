import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experienciaService';
import { TokenService } from 'src/app/service/token-service.service';
import { EditarExperienciaComponent } from '../editar-experiencia/editar-experiencia.component';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia:any;
  experienciaList: any;
  bsModalRef: BsModalRef | undefined;
  result:any;
  empresa='';
  imagenEx='';
  posicion='';
  tipoEmpleo='';
  comienzoEx='';
  finEx='';
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  constructor(private tokenService: TokenService,  private bsModalService: BsModalService, private datosexperiencia: ExperienciaService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  this.datosexperiencia.verExperiencia().subscribe(data =>{
      console.log(data);
      this.experienciaList=data;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }
  borrarExperiencia(id: number) {
    this.datosexperiencia.borrarExperiencia(id).subscribe(
      data => {
        console.log(data);
        this.datosexperiencia.borrarExperiencia;
        this.ngOnInit();
      },
     
    );
  }
  onCreate(): void {
    const experiencia = new Experiencia(this.empresa, this.imagenEx, this.posicion, this.tipoEmpleo, this.comienzoEx, this.finEx);
    this.datosexperiencia.agregarExperiencia(experiencia).subscribe(
      data => {
        
        this.ngOnInit();
      })
      
    
  }
  
editPost(id: number) {
  this.datosexperiencia.changePostId(id);

  this.bsModalRef = this.bsModalService.show(EditarExperienciaComponent);
  this.bsModalRef.content.event.subscribe((result: string) => {
    if (result == 'OK') {
      setTimeout(() => {
        this.datosexperiencia.verExperiencia();
      }, 5000);
    }
  });
}

}
