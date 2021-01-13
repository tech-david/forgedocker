import { Component, OnInit } from '@angular/core';
import { Portfolio } from '../models/portfolio';
import { AuthService } from '../service/auth-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';
import { User } from 'src/app/models/user';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AboutMe } from '../models/aboutMe';
import { Education } from '../models/education';
import { IndustryEquivalency } from '../models/industryEquivalency';
import { SkillMatrix } from '../models/skillMatrix';
import { Project } from '../models/project';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  portfolios: Portfolio[] = [];
  portfolio: Portfolio = new Portfolio();
  aboutMe: AboutMe;
  education: Education;
  industryEquivalency: IndustryEquivalency;
  skillMatrix: SkillMatrix;
  project: Project; 
  //1/1 bugfix team 
  user: User;
  submitted = false;
  id: number;
  belongs_to: string;
  portId: number;


  constructor(private authService: AuthService, private userService: UserServiceService,
    private PortfolioService: PotfolioServiceService, private route: Router) { }

  ngOnInit(): void {
    localStorage.removeItem('portId');
    this.loadData();
   
  }
  loadData() {
    this.authService.infoRequest().subscribe(
      data => {/*console.log(data)*/;
        this.userService.setId(data.userId);
        this.portfolios = [];
        this.userService.getPortfolios().subscribe(data => {
          console.log(data);
          this.portfolios = data;
          //for (let element of data) {
            //this.portfolios.push(element);

          //}
        });
      });

  }

  createPortfolio(){
    console.log("in create porfolio"); 
    console.log(localStorage.getItem('token'));
    this.user = new User();
    this.id = Number(localStorage.getItem('token')); //turns cookie into number and id = cookie
    console.log(this.id);
    this.userService.getUser(this.id).subscribe(data => { //id is 1 when it gets here and prints all data

      this.user = data; 
  
  this.id = Number(this.user.userId);
  console.log(this.id);
  this.portfolio = new Portfolio();
      //get criteria and set sections to the entry values
      /*
      1 about me - this.portfolio.portfolioSection[0] - add 1 item
      2 education - this.portfolio.portfolioSection[1] - add 2 items
      */

  this.PortfolioService.createPortfolio(this.portfolio, this.id)
    .subscribe( 
      data => {
        this.portfolio = data;
        console.log(this.portfolio);
        this.loadData();
        
      }
    )
  },
  error => console.log(error));
  }
  
  //bug fix team added function to use for create porfolio button in user home html 
  onSubmit() {
    console.log("in on submit");
    this.createPortfolio();
  }
  updateList() {
    console.log("in reload");
    this.route.navigate(['/user-home']);

  }


}
