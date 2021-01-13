import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin-skills',
  templateUrl: './admin-skills.component.html',
  styleUrls: ['./admin-skills.component.css']
})
export class AdminSkillsComponent implements OnInit {
  constructor() { }

  skill: string;
  months: number;
  skillList = [];
  monthArr = [];
  skillArr = [];
  
  ngOnInit(): void {
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


  onClick(){
    this.skillList.push({name: this.skill, months: this.months});
    this.skillArr.push(this.skill);
    this.monthArr.push(this.months);
    
    this.skill = '';
    this.months = 0;
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

  getData() {
    return this.skillList;
  }

}
