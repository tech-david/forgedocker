import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() belongsTo: string;

  constructor(private portfolioService:PotfolioServiceService ) { }

  image ='https://i.imgflip.com/2/3txdnl.jpg';

  inputUserInfo: [];

  ngOnInit(): void {
    this.getUserInfo();
    //console.log(this.inputUserInfo);
  }


  getUserInfo(){
    if(this.belongsTo != undefined){
      this.portfolioService.getUserByEmail(this.belongsTo).subscribe(
        (data) => {
          this.inputUserInfo = data;
          //console.log(this.inputUserInfo);
        });
    }
  }
}