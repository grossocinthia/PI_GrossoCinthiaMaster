import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url = 'https://appcinthiagrosso.herokuapp.com/application/persona/';

  constructor(private httpClient: HttpClient) { }

  public verPersona(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.url + 'ver');
  }

  public buscarPersona(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.url + `ver/{id}`);
  }


  public agregarPersona(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', persona);
  }

  public editarPersona(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/{id}`, persona);
  }

  public borrarPersona(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/{id}`);
  }
}