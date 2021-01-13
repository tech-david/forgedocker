import { Component, OnInit } from '@angular/core';
import { Criteria } from '../models/criteria';
import { AdminServiceService } from '../service/admin-service.service';
import { CriteriaService } from '../service/criteria.service';

@Component({
  selector: 'app-admin-criteria',
  templateUrl: './admin-criteria.component.html',
  styleUrls: ['./admin-criteria.component.css']
})
export class AdminCriteriaComponent implements OnInit {
  criteria: Criteria = new Criteria();
  allCriteria: Criteria[];
  step = 0;
     
  addCriteria(id: number, entryAmount: string, requirements: string,criteriaName: string) {
      this.nextStep();
      console.log(entryAmount);
      this.criteria.id=id;
      this.criteria.entryAmount=entryAmount;
      this.criteria.criteriaName=criteriaName;
      this.criteria.requirements=requirements;
      
      this.criteriaService.updateCriteria(this.criteria).subscribe(data=>{
        console.log(data)
        this.criteria=data;
      }, error => console.log(error));
    }

    getAllCriteria(){
      this.criteriaService.getAllCriteria().subscribe(data=>{
        this.allCriteria = data;
      })
    }

    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }
  
  constructor(private criteriaService : CriteriaService, ) { }

  ngOnInit(): void {
    this.getAllCriteria;
  }

}