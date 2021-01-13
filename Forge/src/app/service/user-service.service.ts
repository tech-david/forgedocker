import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Portfolio } from 'src/app/models/portfolio';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private id: number = 0;

  /*PLEASE NOTE HARDCODED USER ID !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  private getPortfoliosUrl: string = "http://localhost:8200/service/getPortfolio/?id=";
  //bug fix adding base url 1/1 
  private baseUrl: string ="http://localhost:8200/service";

  constructor(private http: HttpClient) {}

  getPortfolios(): Observable<Portfolio[]>{
    //console.log(this.id);
    return this.http.get<Portfolio[]>(this.getPortfoliosUrl + this.id);
  }

  setId(id: number): void {
    this.id = id;
  }
  //bug fix team adding get user function 1/1
  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getUser/?id=${id}`);

  }
}
