import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {


  constructor(private httpClient: HttpClient) { }


  sendRegUser(User: User): Observable<User>{
    return this.httpClient.post<User>("http://localhost:8200/service/createUser", User);





  }

  getUsers(): Observable<User []>{
    return this.httpClient.get<User []>("http://localhost:8200/service/getAllUsers");
  }

  
}
