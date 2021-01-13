import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Education } from '../models/education';
import { PotfolioServiceService } from '../service/potfolio-service.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input() inputEducation: []; // decorate the property with @Input()
  @Output() addEducation = new EventEmitter<any>();

  maxdate = new Date();
  mindate = new Date(1973, 0, 1);

  degrees:string[] = ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD"];

  portfolioForm = new FormGroup({
    degree: new FormControl("Select a Degree", Validators.required),
    university: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')] ),
    graduation: new FormControl('', Validators.required),
    major: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]),
    minor: new FormControl('', [Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])
  });
    
  onSubmit(){
    this.addEducation.emit(this.portfolioForm.value);
    this.portfolioForm.reset();
  }

  ngOnInit(): void {

  }

  constructor(private modalService: NgbModal) {}
  
  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }
}