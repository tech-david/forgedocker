import { EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-admin-industry-equivalnecy',
  templateUrl: './admin-industry-equivalnecy.component.html',
  styleUrls: ['./admin-industry-equivalnecy.component.css']
})
export class AdminIndustryEquivalnecyComponent implements OnInit {
  @Input() inputIndustryEquivalency: []; // decorate the property with @Input()
  @Output() addindustryEq = new EventEmitter<any>();

  skill: string;
  experience: number;
  equivalency;

  barChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            min: 0
          }
      }]
    }
  };

  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartLabels: Label[] = ['Java','HTML','SQL'];

  barChartData: ChartDataSets[] = [
    { data: [14,12,10], label: 'Months Experience' }
  ];

  addLabel(){
    if (this.skill != undefined && this.experience != undefined && this.skill != "" && this.experience != 0){
      let data = this.barChartData[0].data;
      this.barChartLabels.push(this.skill);
      let obj = {"months": this.experience, "technology": this.skill};
      this.equivalency.push(obj);
      data.push(this.experience);
    }
  }

  subtractLabel(){
    let data = this.barChartData[0].data;
    this.barChartLabels.pop();
    data.pop();
    this.equivalency.pop();
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    if(this.inputIndustryEquivalency != undefined){
      //console.log(this.inputIndustryEquivalency);
      this.barChartData[0].data =this.inputIndustryEquivalency.map(item => {
            return item['months'];
      });

      this.barChartLabels = this.inputIndustryEquivalency.map(item => {
        return item['technology'];
      });

      this.equivalency = this.inputIndustryEquivalency;
      //console.log(this.equivalency);
    }
  }

  save(){
    // let data = this.barChartData[0].data;
    // let industryEq = [];

    // for  (var i = 0; i < data.length; i++){
    //   let obj = {"months": data[i], "technology": this.barChartLabels[i]};
    //   industryEq.push(obj);
    // }
    
    // //Call service
    // console.log('Call service not implemented');
    // console.log(industryEq);
    // console.log(this.equivalency);
    this.addindustryEq.emit(this.equivalency);
  }

  getData(){
    return this.equivalency;
  }
}
