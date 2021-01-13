import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {fromEventPattern, Observable} from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myHttpClient: HttpClient) { }

  loginRequest(User: User): Observable<User> {

    return this.myHttpClient.post<User>('http://localhost:8200/session/login', User,
    {withCredentials:true}
    );


  }

  //?????Wrapper class??????
  logoutRequest(): Observable<string>{


    return this.myHttpClient.get<string>('http://localhost:8200/session/logout',
    {withCredentials:true}
    );
    

    
  }

  infoRequest(): Observable<User>{

    return this.myHttpClient.get<User>('http://localhost:8200/session/loggers',
    {withCredentials:true}
    );

  }


  logout():void{

    localStorage.removeItem('token');
    localStorage.setItem('isLoggedIn', 'false');

    
  }

  
}
