
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, BaseChartDirective } from 'ng2-charts';
import { IndustryEquivalency } from '../models/industryEquivalency';
import { Portfolio } from '../models/portfolio';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-industry-equivalency',
  templateUrl: './industry-equivalency.component.html',
  styleUrls: ['./industry-equivalency.component.css']
})
export class IndustryEquivalencyComponent implements OnInit {
  @Input() inputIndustryEquivalency: []; // decorate the property with @Input()
  @Output() addindustryEq = new EventEmitter<any>();
  @ViewChild(BaseChartDirective)
  public baseChart: BaseChartDirective;

  technology: string;
  // skill: string;
  months: number
  // experience: number;

  equivalency: IndustryEquivalency[];
  equi: IndustryEquivalency;
  portfolio: Portfolio;
  portfolioId = Number(localStorage.getItem('portId'));

  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
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
  //'Java', 'HTML', 'SQL'
  barChartLabels: Label[] = [];
  //14, 12, 10
  barChartData: ChartDataSets[] = [
    { data: [], label: 'Months Experience' }
  ];
  //this.equivalency.technology was this.skill && this.equivalency.months was this.experience
  addLabel() {
    if (this.technology != undefined && this.months != undefined && this.technology != "" && this.months != 0) {
      let data = this.barChartData[0].data;
      this.barChartLabels.push(this.technology);
      data.push(this.months);

      this.equi = {
        "itemType": "IndustryEquivalency",
        "id": 3,
        "priority": 3,
        "months": this.months,
        "technology": this.technology
      };

      this.equivalency.push(this.equi);
      console.log(this.equivalency);
      // this.portfolio.portfolioSections.push(this.equivalency);

    }
  }

  subtractLabel() {
    let data = this.barChartData[0].data;
    this.barChartLabels.pop();
    data.pop();
    this.portfolio.portfolioSections.pop();
    //this.equivalency.pop();
  }

  constructor(private portfolioService: PotfolioServiceService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngOnChanges(): void {
    if (this.inputIndustryEquivalency != undefined) {
      //console.log(this.inputIndustryEquivalency);
      this.barChartData[0].data = this.inputIndustryEquivalency.map(item => {
        return item['months'];
      });

      this.barChartLabels = this.inputIndustryEquivalency.map(item => {
        return item['technology'];
      });

      this.portfolio.portfolioSections = this.inputIndustryEquivalency;
      //this.equivalency = this.inputIndustryEquivalency;
      //console.log(this.equivalency);
    }
  }

  save() {
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


    // this.portfolio.portfolioSections.push(this.equivalency);
    this.portfolioService.updateIndustryEquivalencyById(this.equivalency).subscribe();

    this.addindustryEq.emit(this.equivalency);
  }

  getData() {
    this.portfolioService.getIndustryEquivalencyById(this.portfolioId).subscribe(data => {
      console.log(data);
      this.equivalency = data;

      var x: IndustryEquivalency;
      for (this.equi of this.equivalency){
        
          this.barChartLabels.push(this.equi.technology);
          this.barChartData[0].data.push(this.equi.months);
          this.baseChart.ngOnChanges;
          //or
          // this.months = this.equi.months;
          // this.technology = this.equi.technology;
          // this.addLabel();
        
      }

  })
    return this.equivalency;
  }
}
