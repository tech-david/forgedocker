import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegisterUserService } from '../service/reg-user-service.service';
import {User} from '../models/user';
import { Portfolio } from '../models/portfolio';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
//  registerList: User[];

constructor(private regService:RegisterUserService) { }

private User: User;
regForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.pattern(/"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"*/)]),
  password: new FormControl('', [Validators.required,  Validators.pattern(/"[a-zA-Z0-9]"*/)]),
  firstname: new FormControl('',[Validators.required, Validators.pattern(/"[a-zA-Z]"*/)]),
  lastname: new FormControl('',[Validators.required, Validators.pattern(/"[a-zA-Z]"*/)])
});

emailError:String='';
passwordError:String='';



model: User[]; 
packageAndShip(){

// console.log (this.regForm.controls['email'].value)
// console.log (this.regForm.controls['password'].value)
// console.log (this.regForm.controls['firstname'].value)
// console.log (this.regForm.controls['lastname'].value)

// console.log('shipping?');
let validSubmission=true;
if(this.regForm.controls['email'].value=='') {
validSubmission=false;
this.emailError='That email is invalid, must be an valid email address';
} else {this.emailError='';}

if(this.regForm.controls['password'].value==''){
validSubmission=false;
this.passwordError='That password is invalid, please use a password with letters and numbers only, no spaces or special characters.';
} else {this.passwordError='';}

for (let i: number = 0; i < this.model.length; i++) {
  if (this.regForm.controls['email'].value == this.model[i]["email"]){
    validSubmission=false;
    this.emailError='That email is already in use, please choose another.';    
    break;    
  }
}



if(validSubmission)
{
  //console.log(this.User);
  this.User["userId"]=0;
  this.User["email"]=this.regForm.controls['email'].value;
  this.User["password"]=this.regForm.controls['password'].value;
  this.User["firstName"]=this.regForm.controls['firstname'].value;
  this.User["lastName"]=this.regForm.controls['lastname'].value;
  this.User["is_Admin"]=false;
   
  


  this.regService.sendRegUser(this.User).subscribe(
  data=>{
  // console.log(data);
  }

 );
} else{
  // console.log("not poggers");
}
}
 

  ngOnInit(): void {

    this.regService.getUsers().subscribe(
      data=>{
        this.model=data;
      });
    //console.log(localStorage.getItem('token'));
   this.User={
      userId:0,
      email:'',
      password:'',
      firstName:'',
      lastName:'',
      is_Admin:false,
      portfolio: []  //should be Portfolio object array
    }
    //this.regService.getListOfUsers().subscribe(data=>{
     // this.userList=data;
    }
   // );
  }
