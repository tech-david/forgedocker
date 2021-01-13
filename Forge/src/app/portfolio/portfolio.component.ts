import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AboutMeComponent } from '../about-me/about-me.component';

//change to property access (.) instead of property binding([])

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  //changed from Object to Portfolio
  portfolio: Portfolio;

  skills: any = [];
  skillNumber;
  portfolioid;
  
  user: User = new User;
  userId: number;
  firstName: string;
  lastName: string;

  //add UserServiceService
  constructor(private portfolioService: PotfolioServiceService,private router: Router) { 
    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    this.portfolioid = splitUrl[splitUrl.length -1];
    this.userId = parseInt(localStorage.getItem('token'));
  }

  ngOnInit(): void {
    //console.log(this.portfolioid);
    
    if(this.portfolioid =='portfolio'){
      console.log("Creating portfolio");
      //this.createPortfolio();
    }else{
      console.log("we have an id");
      localStorage.setItem('portId', this.portfolioid);
      this.getPortfolio(this.portfolioid);
      
    }
    //this.portfolioService.setPortfolio(this.portfolio);
  }

  setSkillsMatrix(){
    //console.log('calling ser skills')
    if(this.portfolio != undefined){
      let skillMatrixlength = this.portfolio['skillMatrix'].length;
        for(var i = 0; i < skillMatrixlength; i++ ){
          this.skills.push(i);
        }
        //console.log(this.skills);
    }
  }

  submitPortfolio(){
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(); 
  }

  //change to createPortfolio(portfolio, id)
  // createPortfolio(){
  //   this.portfolioService.createPortfolio(this.portfolio).subscribe( (data) =>{
  //     //console.log(data);
  //     this.portfolio = data;
  //   })
  // }

  getPortfolio(portfolioId){
    this.portfolioService.getPortfolioById(portfolioId).subscribe((data) =>{
      this.portfolio = data;
      console.log(data);
      //possible can delete
      this.portfolioService.getUser(this.userId).subscribe(
        (data2) => {
          this.user = data2;
          console.log(data2);
          this.portfolio.user = this.user; //possible breakpoint
          //console.log(this.portfolio);
        });
    })
    this.setSkillsMatrix();
  }
  
  updateEducation(education:Education){
    this.portfolio.portfolioSections.push(education);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();
  }

  updateAboutMe(aboutMe: any){
    console.log(this.portfolio);
    this.portfolioService.updateAboutMeById(this.portfolioid, aboutMe).subscribe();
  }

  updateIndustryEq(industryEq:any){
    this.portfolio.portfolioSections.push(industryEq);
    this.portfolioService.updateIndustryEquivalencyById(industryEq);

    //not working
    // this.portfolioService.updatePortfolio(this.portfolio).subscribe();  
  }
  
  updateProject(projects){
    // let projectLength = this.portfolio['projects'].length;
    // this.portfolio['projects'].splice(0,projectLength-1);
    // this.portfolio['projects'] = projects;
    // this.portfolioService.updatePortfolio(this.portfolio).subscribe(); 
    this.portfolio.portfolioSections.push(projects);
    this.portfolioService.updateIndustryEquivalencyById(projects);
    // this.portfolioService.updatePortfolio(this.portfolio).subscribe(); 
    setTimeout(() => this.getPortfolio(this.portfolioid), 500);

    //console.log(projects);
    //console.log(this.portfolio);
  }

  
  // addSkill(){
  //   this.skillNumber++;
  //   this.skills.push(this.skillNumber);
  // }

  // removeSkill(){
  //   this.skillNumber--;
  //   this.skills.pop();
  // }
}
