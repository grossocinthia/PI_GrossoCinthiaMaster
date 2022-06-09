import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Skill } from '../models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  postIdSource = new  BehaviorSubject<number>(0);
  url = 'https://aplicaciongrosso.herokuapp.com/aplicacion/skill/';

  constructor(private httpClient: HttpClient) { }

  public verSkill(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.url + 'ver');
  }

  public buscarSkill(id: number): Observable<Skill> {
    let header = new HttpHeaders();
    header.append('Content-Type', 'applications/json');
    return this.httpClient.get<Skill>(this.url + `ver/${id}`);
  }


  public agregarSkill(skill: Skill): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', skill);
  }

  public editarSkill(skill: Skill): Observable<any> {
    return this.httpClient.put<any>(this.url + `editar`, skill);
  }

  public borrarSkill(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  changePostId(id: number){
    this.postIdSource.next(id);
  }
}
