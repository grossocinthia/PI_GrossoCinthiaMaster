import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Escuela } from '../models/escuela';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EscuelaService {
  postIdSource = new  BehaviorSubject<number>(0);
  url = 'https://aplicaciongrosso.herokuapp.com/aplicacion/escuela/';

  constructor(private httpClient: HttpClient) { }

  public verEscuela(): Observable<Escuela[]> {
    return this.httpClient.get<Escuela[]>(this.url + 'ver');
  }

  public buscarEscuela(id: number): Observable<Escuela> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.httpClient.get<Escuela>(this.url + `ver/${id}`);
  }


  public agregarEscuela(escuela: Escuela): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', escuela);
  }

  public editarEscuela(escuela: Escuela): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar`, escuela);
  }

  public borrarEscuela(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  changePostId(id: number){
    this.postIdSource.next(id);
  }
}


