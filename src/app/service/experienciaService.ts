import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  postIdSource = new  BehaviorSubject<number>(0);
  url = 'https://aplicaciongrosso.herokuapp.com/aplicacion/experiencia/';

  
  constructor(private httpClient: HttpClient) { }

  public verExperiencia(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'ver');
  }

  public buscarExperiencia(id: number): Observable<Experiencia> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }


  public agregarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', experiencia);
  }

  public editarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar`, experiencia);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  changePostId(id: number){
    this.postIdSource.next(id);
  }
}


