import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { User } from '../models/user';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  // @Input() id: number;
  
  constructor(private portfolioService:PotfolioServiceService ) { }

  image ='https://i.imgflip.com/2/3txdnl.jpg';

  inputUserInfo: [];
  user: User = new User;
  userId: number;
  lastName: string;

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('token'));
    console.log(this.userId);
    this.getUserInfo();
    //console.log(this.inputUserInfo);
  }


  getUserInfo(){
    if(this.userId != undefined){
      this.portfolioService.getUser(this.userId).subscribe(
        (data) => {
          console.log(data);
          this.inputUserInfo = data;
        });
    }
  }
}