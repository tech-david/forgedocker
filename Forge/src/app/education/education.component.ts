import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../models/education';
import { Portfolio } from '../models/portfolio';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
 // @Input() inputEducation: []; // decorate the property with @Input()
//  @Output() addEducation = new EventEmitter<any>();

  education: Education = new Education();
  portfolio: Portfolio = new Portfolio;
  portfolioItemId: number;

  portfolioId: number;
  sections: any[];
  eduSections: any[] = [];
  newGrad: string;

  maxdate = new Date();
  mindate = new Date(1973, 0, 1);

  degrees:string[] = ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "Doctor of Philosophy"];

  portfolioForm = new FormGroup({
    degree: new FormControl("Select a Degree", Validators.required),
    university: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')] ),
    graduation: new FormControl('', Validators.required),
    major: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    minor: new FormControl('', [Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])
  });
  constructor(private modalService: NgbModal, private PortfolioService: PotfolioServiceService) {}
  
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  ngOnInit() {
    this.portfolioId = parseInt(localStorage.getItem('portId'));
    this.PortfolioService.getPortfolioById(this.portfolioId).subscribe(
      data => {
        console.log(data);
        this.sections = data.portfolioSections;
        console.log(this.sections);
      var i: number;

      for(i=0; i < this.sections.length; i++){
        if(this.sections[i].itemType == "Education"){
          console.log(this.sections[i]);
          this.eduSections.push(this.sections[i]);
          console.log(this.eduSections);
        }
      };
      }
      )

      // var i: number;
      // for(i=0; i < this.sections.length; i++){
      //   if(this.sections[i].itemType.equals("Education")){
      //     console.log("education");
      //   };
      // };
  }

  showdate() {
    var customerDate = this.portfolioForm.get('graduation').value;
  
    var months = new Array();
    months[0] = "February";
    months[1] = "March";
    months[2] = "April";
    months[3] = "May";
    months[4] = "June";
    months[5] = "July";
    months[6] = "August";
    months[7] = "September";
    months[8] = "October";
    months[9] = "November";
    months[10] = "December";
    months[11] = "January";
  
    var date = new Date(customerDate);
    var month = months[date.getMonth()];
    //converting the date into array
    var dateArr = customerDate.split("-");
    //setting up the new date form
    var forDate = month + " " + dateArr[0];
    this.newGrad = forDate;
  }
  onSubmit(){
    this.showdate();
    // Trying to create a new education and updating 
    console.log("in onSubmit of education component");
    // this.PortfolioService.getEducationById(this.portfolioItemId).subscribe(data => 
    // {
    //   this.education = data;
    //   console.log(data);
    // });
    this.education.itemType = "Education";
    this.education.education_id = 1;
    this.education.priority = 2;
    this.education.degree = this.portfolioForm.get('degree').value;
    this.education.graduation = this.newGrad;
    this.education.major = this.portfolioForm.get('major').value;
    this.education.minor = this.portfolioForm.get('minor').value;
    this.education.university = this.portfolioForm.get('university').value;
    console.log(this.education);
    this.PortfolioService.createEducationById(this.education).subscribe(
      data2 => {
        console.log(data2);
        this.education = data2;
       // this.addEducation.emit(this.portfolioForm.value);
        
      });
    // What is this doing?
    //this.portforolioForm.value
    // this.addEducation.emit(this.portfolio.portfolioSections);
    this.portfolioForm.reset();
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
}
}