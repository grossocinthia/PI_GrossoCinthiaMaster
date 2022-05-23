import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url = 'http://localhost:8080/api/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public verProyecto(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'ver');
  }

  public buscarProyecto(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `ver/${id}`);
  }


  public agregarProyecto(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', proyecto);
  }

  public editarProyecto(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, proyecto);
  }

  public borrarProyecto(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
