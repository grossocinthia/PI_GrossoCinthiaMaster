import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/service/proyectoService';
import { Proyecto } from 'src/app/models/proyecto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EditarProyectoComponent } from '../editar-proyecto/editar-proyecto.component';
import { TokenService } from 'src/app/service/token-service.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: any;
  proyectoList: any;
  imagenProy='';
  tituloProy='';
  descripcion='';
  link='';
  id:number=0;
  bsModalRef: BsModalRef | undefined;
  isLogged = false;
  isLoginFail = false;
  roles: string[] = [];
  
  constructor(private tokenService: TokenService, private datosproyecto: ProyectoService, 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private bsModalService: BsModalService
    ) { }

  ngOnInit(): void {
  this.datosproyecto.verProyecto().subscribe(data =>{
      console.log(data);
      this.proyectoList=data;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    }
  
 
  borrarProyecto(id: number) {
    this.datosproyecto.borrarProyecto(id).subscribe(
      data => {
        console.log(data);
        this.datosproyecto.borrarProyecto;
        this.ngOnInit();
      },
     
    );
  }
  onCreate(): void {
    const proyecto = new Proyecto(this.imagenProy, this.tituloProy, this.descripcion, this.link);
    this.datosproyecto.agregarProyecto(proyecto).subscribe(
      data => {
        
        this.ngOnInit();
        
      })
    
  }
  
  editPost(id: number) {
    this.datosproyecto.changePostId(id);
  
    this.bsModalRef = this.bsModalService.show(EditarProyectoComponent);
    this.bsModalRef.content.event.subscribe((result: string) => {
      if (result == 'OK') {
        setTimeout(() => {
          this.datosproyecto.verProyecto();
        }, 5000);
      
      }
    });
  }
  
  }
  
  