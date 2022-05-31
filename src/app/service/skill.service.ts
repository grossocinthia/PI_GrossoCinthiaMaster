import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'https://aplicaciongrosso.herokuapp.com/aplicacion/skill/';

  constructor(private httpClient: HttpClient) { }

  public verSkill(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url + 'ver');
  }

  public buscarSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.url + `ver/${id}`);
  }


  public agregarSkill(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', skill);
  }

  public editarSkill(id: number, skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar/${id}`, skill);
  }

  public borrarSkill(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
