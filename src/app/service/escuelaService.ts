import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Escuela } from '../models/escuela';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  url = 'https://appgrosso.herokuapp.com/appgrosso/escuela/';

  constructor(private httpClient: HttpClient) { }

  public verEscuela(): Observable<Escuela[]> {
    return this.httpClient.get<Escuela[]>(this.url + 'ver');
  }

  public buscarEscuela(id: number): Observable<Escuela> {
    return this.httpClient.get<Escuela>(this.url + `ver/${id}`);
  }


  public agregarEscuela(escuela: Escuela): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', escuela);
  }

  public editarEscuela(id: number, escuela: Escuela): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, escuela);
  }

  public borrarEscuela(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}


