import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Criteria } from '../models/criteria';
//import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {
  //url = "http://localhost:8200";
  criteriaUrl= "http://localhost:8200/criteria";

  constructor(private http: HttpClient) { }

  updateCriteria(criteria: Criteria) : Observable<any>{
    console.log(`${this.criteriaUrl}/${criteria.id}`);
    console.log(criteria);
   return this.http.post<any>(`${this.criteriaUrl}/update/${criteria.id}`, criteria);
  }

  getCriteriaByName(criteriaName : string): Observable<Criteria>{
    return this.http.get<Criteria>(`${this.criteriaUrl}/${criteriaName}`);
  }

  getAllCriteria(): Observable<any[]>{
    return this.http.get<any[]>(`${this.criteriaUrl}/getAllCriteria`);
  }
  
  
}