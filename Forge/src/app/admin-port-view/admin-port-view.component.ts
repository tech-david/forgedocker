import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../service/admin-service.service';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-admin-port-view',
  templateUrl: './admin-port-view.component.html',
  styleUrls: ['./admin-port-view.component.css']
})
export class AdminPortViewComponent implements OnInit {
  portfolio:Object;

  skills: any = [];
  skillNumber;
  portfolioid;

  feedbackInfo: string;

  constructor(private portfolioService: PotfolioServiceService,private router: Router, private adminService: AdminServiceService) { 
    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    this.portfolioid = splitUrl[splitUrl.length -1];
  }

  // sets to be called everytime
  ngOnInit(): void {
    let url:string = this.router.url;
    let splitUrl =  url.split('/');
    //console.log("Split URL: " + splitUrl);
    this.getPortfolio(this.portfolioid);
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

  getPortfolio(portfolioId){
    this.portfolioService.getPortfolioById(portfolioId).subscribe((data) =>{
      this.portfolio = data;
      //let user;
      //console.log("PORTFOLIO DATA: " + JSON.stringify(data));
      /*this.portfolioService.getUserByEmail(this.portfolio['belongsTo']).subscribe(
        (data) => {
          user = data;
          this.portfolio['myUser'] = user;
          console.log(this.portfolio);
        });*/
    })
    this.setSkillsMatrix();
  }
  
  updateEducation(education:any){
    education['id'] = this.portfolio['education']['0']['id'];
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

  approveOrDeny(status: string){
    this.portfolio['status'] = status;
    let user;
    this.adminService.getUserByEmail(this.portfolio['belongsTo']).subscribe(
      (data) => {
        user = data;
        this.portfolio['myUser'] = user;
        var emailToSend = {
         "userFirstName": user['firstName'],
         "userEmail": user['email'],
         "portfolioStatus": this.portfolio['status'],
         "feedBack": this.feedbackInfo,
         "portfolioId": this.portfolio['id']
       }
 
       //console.log("Updated portfolio information: " + JSON.stringify(this.portfolio));
       this.adminService.updatePortfolio(this.portfolio).subscribe(
         (data) => console.log("")
       );
       
       //console.log("Email object to send: " + JSON.stringify(emailToSend));
       //console.log("Portfolio belongs to: " + this.currentPortfolio['belongsTo']);
    
       this.adminService.sendEmail(emailToSend).subscribe();
 
       }
    );
    
 
    
    
  }

}

