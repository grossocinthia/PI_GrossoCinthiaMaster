import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  postIdSource = new  BehaviorSubject<number>(0);
  url = 'https://aplicaciongrosso.herokuapp.com/aplicacion/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public verProyecto(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'ver');
  }

  public buscarProyecto(id: number): Observable<Proyecto> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }


  public agregarProyecto(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', proyecto);
  }

  public editarProyecto(proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar`, proyecto);
  }

  public borrarProyecto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  changePostId(id: number){
    this.postIdSource.next(id);
  }
}
