import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Criteria } from '../models/criteria';
import { Portfolio } from '../models/portfolio';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  private getPortfoliosUrl: string = "http://localhost:8200/service/getAllPortfolios";
  private getUsersUrl: string = "http://localhost:8200/service/getAllUsers";
  private getPortfolioByIdUrl = "http://localhost:8200/service/getPortfolioByID/";
  private sendEmailUrl = "http://localhost:8200/email/sendEmail";
  private getUserByEmailUrl = "http://localhost:8200/service/getUserByEmail/";
  private updatePortfolioUrl = "http://localhost:8200/service/updatePortfolio";
  private updateCriteriaUrl= "http://localhost:8200/criteria";

  constructor(private http: HttpClient) { 
  }

  getPortfolios(): Observable<Portfolio[]>{
    return this.http.get<Portfolio[]>(this.getPortfoliosUrl);
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.getUsersUrl);
  }

  getPortfolioByID(id: string): Observable<any> {
    return this.http.get<any>(this.getPortfolioByIdUrl + id);
  }

  sendEmail(portfolio: any) {
    return this.http.post(this.sendEmailUrl, 
    JSON.stringify(portfolio),
    {headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'});
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(this.getUserByEmailUrl + email);
  }

  updatePortfolio(portfolio: any) {
    return this.http.put(this.updatePortfolioUrl, portfolio);
  }

  updateCriteria(criteria: Criteria) : Observable<any>{
     console.log(criteria.criteriaName);
    console.log(`${this.updateCriteriaUrl}/${criteria.id}`);
    console.log(criteria);
   return this.http.post<any>(`${this.updateCriteriaUrl}/${criteria.id}`, criteria);
  }
}