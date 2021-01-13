import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   
import { AuthService } from '../service/auth-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import {User} from '../models/user';
import { RegisterUserService } from '../service/reg-user-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService,  
    private regService: RegisterUserService
  ) { }

  model: User[];   

  loginError:String='';
  

loginForm: FormGroup;  
message: string;  
returnUrl: string;  

  ngOnInit() {  

    this.authService.logout();
    //console.log(localStorage.getItem('token'));
    this.loginForm = this.formBuilder.group({  
    email: ['', Validators.required],  
    password: ['', Validators.required] 
  });
  this.regService.getUsers().subscribe(
    data=>{
      this.model=data;
      //console.log(data);
    }




  );
  
  //this.returnUrl='./user-home';
  this.authService.logoutRequest();
  //console.log(localStorage.getItem('token'));
  }

  get f() { return this.loginForm.controls; }  

  login() {

 
  
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
     
      
       return;  
    }  
    else {  

      for (let i: number = 0; i < this.model.length; i++) {
       if (this.f.email.value == this.model[i]["email"] && this.f.password.value == this.model[i]["password"]) {  

        if (this.model[i]["admin"]==true){

          //console.log("Admin Login successful");            
          this.authService.loginRequest(this.model[i]).subscribe(
            data => {
              //console.log(data);
            }
          );
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', JSON.stringify(this.model[i]["userId"]));
          //console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('/admin-home');  
          this.loginError='';

        }
        
        else if (this.model[i]["admin"]==false)
        
        {
          //console.log("User Login successful");            
          this.authService.loginRequest(this.model[i]).subscribe(
            data => {
              //console.log(data);
              this.router.navigateByUrl('/user-home');
            }
          );
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', JSON.stringify(this.model[i]["userId"]));
          //console.log(localStorage.getItem('token'));
          this.router.navigateByUrl('/user-home');  
          this.loginError='';
       }  
    else {  
       this.loginError='The credentials dont match any in our system, please check your username and password.' 
       }  
      }  
      }
    }
  }
}
