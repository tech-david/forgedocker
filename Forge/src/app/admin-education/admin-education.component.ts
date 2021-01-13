import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-education',
  templateUrl: './admin-education.component.html',
  styleUrls: ['./admin-education.component.css']
})
export class AdminEducationComponent implements OnInit {

  @Input() inputEducation: []; // decorate the property with @Input()
  @Output() addEducation = new EventEmitter<any>();

  maxdate = new Date();
  mindate = new Date(1973, 0, 1);

  degrees:string[] = ["Associate's Degree", "Bachelor's Degree", "Master's Degree", "PhD"];

  portfolioForm = new FormGroup({
    degree: new FormControl("", Validators.required),
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