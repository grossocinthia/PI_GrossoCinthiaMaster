import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  postIdSource = new  BehaviorSubject<number>(0);
url = 'https://aplicaciongrosso.herokuapp.com/aplicacion/persona/';

  constructor(private httpClient: HttpClient) { }

  public verPersona(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'ver');
  }

  public buscarPersona(id: number): Observable<Persona> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.httpClient.get<Persona>(this.url + `ver/${id}`);
  }


  public agregarPersona(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', persona);
  }

  public editarPersona(persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar`, persona);
  }

  public borrarPersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  changePostId(id: number){
    this.postIdSource.next(id);
  }
}