import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url = 'http://localhost:8080/application/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public verExperiencia(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'ver');
  }

  public buscarExperiencia(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url + `ver/${id}`);
  }


  public agregarExperiencia(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', experiencia);
  }

  public editarExperiencia(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, experiencia);
  }

  public borrarExperiencia(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
