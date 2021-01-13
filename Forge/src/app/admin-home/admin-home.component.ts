import { Route } from '@angular/compiler/src/core';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Portfolio } from '../models/portfolio';
import { User } from '../models/user';
import { AdminPortViewComponent } from '../admin-port-view/admin-port-view.component';
import { AdminServiceService } from '../service/admin-service.service';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class AdminHomeComponent implements OnInit {
// Dummy Objects
  portfolio: Object[] = [
    {"id": 1, "belongs_to": "Dummy Exampleton", "date": "09/21/20"},
    {"id": 2, "belongs_to": "Dummy Exampleton", "date": "09/20/20"},   
    {"id": 3, "belongs_to": "Dummy Exampleton", "date": "09/06/20"}
  ]
// variable to get current objects
  currentPortfolio: Object;
  
  
  portfolios: Portfolio[] = [];
  users: User[] = [];

  constructor(private adminService: AdminServiceService, private router: Router) { }

//  iterates through the data and returns it to the portfolio array 
  ngOnInit(): void {
    this.adminService.getPortfolios().subscribe(data => 
      {for(let element of data){
          this.portfolios.push(element);
      }});
      this.adminService.getUsers().subscribe(data =>
        {for(let user of data){
          this.users.push(user);
        }});
  }

  // when the button is clicked it will give you the current protfolio
  viewPortfolio(currentPortfolio: Object){
    // this.router.navigate(['viewPortfolio']);
    this.currentPortfolio = currentPortfolio;

  }

  // returns the current portfolio
  getCurrentPortfolio(): Object{
    return this.currentPortfolio;
    
  }

  getUserName(email: string): string {
     for(let user of this.users){
       if(email== user.email){
         return  user.firstName +" "+ user.lastName;
       }
     }
    
  }


  accept(){}

  deny(){}
}