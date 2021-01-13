import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { Portfolio } from '../models/portfolio';
import { Education } from '../models/education';
import { Router } from '@angular/router';

//change to property access (.) instead of property binding([])

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  portfolio:Object;

  skills: any = [];
  skillNumber;
  portfolioid;

  constructor(private portfolioService: PotfolioServiceService,private router: Router) { 
    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    this.portfolioid = splitUrl[splitUrl.length -1];
  }

  ngOnInit(): void {
    //console.log(this.portfolioid);
    if(this.portfolioid =='portfolio'){
      //console.log("Creating portfolio");
      this.createPortfolio();
    }else{
      //console.log("we have an id");
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

  createPortfolio(){
    this.portfolioService.createPortfolioServ().subscribe( (data) =>{
      //console.log(data);
      this.portfolio = data;
    })
  }

  getPortfolio(portfolioId){
    this.portfolioService.getPortfolioById(portfolioId).subscribe((data) =>{
      this.portfolio = data;
      let user;

      this.portfolioService.getUserByEmail(this.portfolio['belongsTo']).subscribe(
        (data) => {
          user = data;
          this.portfolio['myUser'] = user; //possible breakpoint
          //console.log(this.portfolio);
        });
    })
    this.setSkillsMatrix();
  }
  
  updateEducation(education:any){
    education['id'] = this.portfolio['education']['0']['id']; ///what do?
    this.portfolio['education'].splice(0, 1);
    this.portfolio['education'].push(education);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();    
  }

  updateAboutMe(aboutMeInfo:any){
    this.portfolio['aboutMe']['description'] = aboutMeInfo;
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();    
  }

  updateIndustryEq(industryEq:any){
    let projectLength = this.portfolio['industryEquivalency'].length;

    //console.log(industryEq);

    this.portfolio['industryEquivalency'].splice(0,projectLength-1);
    this.portfolio['industryEquivalency'] = industryEq;
  
    //console.log('This is the current Portfolio');
    //console.log(this.portfolio);
    this.portfolioService.updatePortfolio(this.portfolio).subscribe();  
  }
  
  updateProject(projects){
    let projectLength = this.portfolio['projects'].length;
    this.portfolio['projects'].splice(0,projectLength-1);
    this.portfolio['projects'] = projects;
    this.portfolioService.updatePortfolio(this.portfolio).subscribe(); 
    setTimeout(() => this.getPortfolio(this.portfolioid), 500);

    //console.log(projects);
    //console.log(this.portfolio);
  }

  
  addSkill(){
    this.skillNumber++;
    this.skills.push(this.skillNumber);
  }

  removeSkill(){
    this.skillNumber--;
    this.skills.pop();
  }
}
