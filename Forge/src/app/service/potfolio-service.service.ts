import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Portfolio } from '../models/portfolio';

@Injectable({
  providedIn: 'root'
})
export class PotfolioServiceService {

  constructor(private http: HttpClient) { }
  private getUserByEmailUrl = "http://localhost:8200/service/getUserByEmail/";
   url = "http://localhost:8200/";

  aboutMeDescription:string;
  currPortfolio: Object;

  createPortfolioServ():Observable<any[]>{
    //console.log("creating portfolio in service");
    let userId = localStorage.getItem('token');
    //console.log(userId);
    return this.http.get<any>(this.url + "service/createPortfolio?userId="+ userId);
  }
  //bugfix adding create porfolio function 
   //new method 
   createPortfolio(portfolio: object, id: number) : Observable<any> {
    return this.http.post(this.url + "service/createPortfolio/" + `${id}`, portfolio, {withCredentials: true});
  }
  
  getUserInfoById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "service/getUser?id=" + portfolioId)
  }

  getPortfolioById(portfolioId: number): Observable<Object>{
    //console.log('getting portfolio')
    return this.http.get<Object>(this.url + "service/getPortfolioByID/" + portfolioId);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get<any>(this.getUserByEmailUrl + email);
  }

  updatePortfolio(portfolio: any){
    //console.log(portfolio)
    return this.http.put(this.url + "service/updatePortfolio", portfolio)
  }


  updateUserInfoById(portfolio: any){
    return this.http.put(this.url + "service/updatePortfolio", portfolio)
  }

  getAboutMeById(portfolioId: number): Observable<any[]>{
    //console.log('getting about me info')
    return this.http.get<any[]>(this.url + "update/getaboutMe?id=" + portfolioId)
  }

  updateAboutMeById(portfolio: any){
    return this.http.put(this.url + "update/updateAboutMe", portfolio)
  }
  
  getEducationById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "update/geteducation/id?=" + portfolioId)
  }

  updateEducationById(portfolio: any){
    return this.http.put(this.url + "update/education", portfolio)
  }

  getIndustryEquivalencyById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "update/getindustryEquivalency/id?=" + portfolioId)
  }

  updateIndustryEquivalencyById(portfolio: any){
    return this.http.put(this.url + "update/industryEquivalency", portfolio)
  }

  getProjectById(portfolioId: number): Observable<any[]>{
    return this.http.get<any[]>(this.url + "update/getProject/id?=" + portfolioId)
  }

  updateProjectById(portfolio: any){
    return this.http.put(this.url + "update/updateproject", portfolio)
  }

  getCriteriaById(criteriaId : number){
    return this.http.get<any>(this.url +"service/criteria/" + criteriaId)

  }

}
