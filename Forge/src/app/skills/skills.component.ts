import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import * as Chart from 'chart.js';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PotfolioServiceService } from '../service/potfolio-service.service';
import { SkillMatrix } from '../models/skillMatrix';
import { skillMatrixItems } from '../models/skillMatrixItems';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillMatrix: SkillMatrix = new SkillMatrix();
  skillMatrixItemArr: any[] = [];
  skillNumber: number;
  skills: any = [];
  skillName: string;
  experience: number;
  skillList = [];
  monthArr = [];
  skillArr = [];
  portfolioId: number;
  sections: any[] = [];
  skillsSection: any[] = [];
  individualSkillTitle: any[] = [];

  skillMatrixItem: skillMatrixItems = new skillMatrixItems();

  skillMatrixItemArray: any[] = [];
  skillMatrixIndiv: SkillMatrix = new SkillMatrix;
  
  skillTitleForm = new FormGroup({
    skillTitle: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])
  });

  addSkillForm = new FormGroup({
    skillName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    months: new FormControl('', [Validators.required])
  });
  
  constructor(private modalService: NgbModal, private PortfolioService: PotfolioServiceService) {}

  open(content) {
    this.modalService.open(content, { size: 'md' });
  }
  
  ngOnInit(){
    this.sections = [];
    this.skillsSection = [];

    this.portfolioId = parseInt(localStorage.getItem('portId'));
    this.PortfolioService.getPortfolioById(this.portfolioId).subscribe(
      data => {
        console.log(data);
        this.sections = data.portfolioSections;
        console.log(this.sections); //all sections
      
        var i: number;

      for(i=0; i < this.sections.length; i++){
        if(this.sections[i].itemType == "SkillMatrix"){
          console.log(this.sections[i]);
          this.skillsSection.push(this.sections[i]);
          console.log(this.skillsSection); //just skill section
        }
      }
      
      for(i=0; i < this.skillsSection.length; i++) {
        this.skillMatrixIndiv = this.skillsSection[i];
        console.log(this.skillMatrixIndiv.skillMatrixItem[i]);
       // this.skillMatrixItemArray.push(this.skillMatrixIndiv.skillMatrixItem[i]);
       // console.log(this.skillMatrixItemArray);     
        // for(i=0; i>this.skillMatrixIndiv.skillMatrixItem[i]; i++) {
        //   console.log(this.skillMatrixItem[i].skillName);
        //   console.log(this.skillMatrixItem[i].experience);
        // }
        // if(this.skillsSection[i].skillMatrixItem[i] !== []) {
        //   this.skillList.push(this.skillsSection[i]);
        //   console.log(this.skillList);
        // } else{
          
       // }
      }
    }
      )
  }

  // doughnutChartOptions: ChartOptions = {
  //   responsive: true,
    
  // };

  // doughnutChartLabels: Label[] = this.skillArr;
  // doughnutChartType: ChartType = 'doughnut';
 
  // doughnutChartData: SingleDataSet =[
  //   this.monthArr
  // ];

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod() {
  this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.skillArr,
        datasets: [{
          data: this.monthArr,
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }]
      }
    });
  }
  onSubmit(){
    this.skillMatrix = new SkillMatrix;
    
    console.log("in onSubmit of skill category");
    this.skillMatrix.itemType = "SkillMatrix";
    this.skillMatrix.skillMatrixId = 0;
    this.skillMatrix.priority = 4;
    this.skillMatrix.skillTitle = this.skillTitleForm.get('skillTitle').value; //title
    this.skillMatrix.skillMatrixItem = this.skillMatrixItemArr;
    console.log(this.skillMatrix.skillTitle); //confirms
    this.PortfolioService.addSkillCategoryById(this.skillMatrix).subscribe(
      data => {
        this.skillMatrix=data;
        console.log(data);
        localStorage.setItem('skillId', (this.skillMatrix.skillMatrixId).toString());
      }
    
    )
  

    this.skillTitleForm.reset();
    this.addSkill();
  }

  onSend(){
    console.log("in onSend of skills");
    this.skillMatrixItem.skillMatrix;
    this.skillMatrixItem.skillMatrixItemId;
    this.skillMatrixItem.skillName = this.addSkillForm.get('skillName').value;
    this.skillMatrixItem.experience = this.addSkillForm.get('months').value;
    console.log(this.skillMatrixItem);
    console.log(this.skillMatrix);
    let id = parseInt(localStorage.getItem('skillId'));
    this.PortfolioService.createSkill(this.skillMatrixItem, id).subscribe( 
     data2 => {
        console.log(data2);
        this.onClick(data2);

      }
    )
    this.addSkillForm.reset();
    //this.refresh();
  }

  addSkill(){
    this.skills.push(this.skillMatrix);
    console.log(this.skills);
  }

  onClick(data2){
    this.skillList.push({skillName: data2.skillName, experience: data2.experience});
    console.log(this.skillList);
    this.skillArr.push(data2.skillName);
    this.monthArr.push(data2.experience);
    
    this.skillName = '';
    this.experience = 0;
    this.doughnutChartMethod();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.skillList, event.previousIndex, event.currentIndex);
    moveItemInArray(this.skillArr, event.previousIndex, event.currentIndex);
    moveItemInArray(this.monthArr, event.previousIndex, event.currentIndex);
    this.doughnutChartMethod();
  }

  remove(event){
    this.skillList.splice(event, 1);
    this.skillArr.splice(event, 1);
    this.monthArr.splice(event, 1);
    this.doughnutChartMethod();
  }

  setSkillsMatrix(){
    //console.log('calling ser skills')
    // if(this.portfolio != undefined){
    //   let skillMatrixlength = this.portfolio['skillMatrix'].length;
    //     for(var i = 0; i < skillMatrixlength; i++ ){
    //       this.skills.push(i);
    //     }
        //console.log(this.skills);
    //}
  }
  

  removeSkill(){
    //this.skillNumber--;
    //this.skills.pop();
  }
  
  refresh(): void {
    window.location.reload();
}
}