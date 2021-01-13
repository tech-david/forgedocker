import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationComponent],
      // imports: [ReactiveFormsModule, FormsModule]
      imports: [HttpClientTestingModule,RouterTestingModule,ReactiveFormsModule,FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('university field validity', () => {
    let errors = {};
    let university = component.portfolioForm.controls['university'];

    //university field is required
    errors = university.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(errors['pattern']).toBeFalsy();

    // Set university to something incorrect minlength 3
    university.setValue("At");
    errors = university.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    expect(errors['pattern']).toBeFalsy();

    // Set university to something correct
    university.setValue("My University is great");
    errors = university.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();

      // Set university to  something incorrect
    university.setValue("My University @ is great");
    errors = university.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();
  });

  it('major field validity', () => {
    let errors = {};
    let major = component.portfolioForm.controls['major'];

    //major field is required
    errors = major.errors || {};
    expect(errors['required']).toBeTruthy();
    expect(errors['pattern']).toBeFalsy();

    // Set major to something incorrect min length 3
    major.setValue("At");
    errors = major.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    expect(errors['pattern']).toBeFalsy();

    // Set major to something incorrect
    major.setValue("!.");
    errors = major.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();
    expect(errors['pattern']).toBeTruthy();

    // Set major to something correct
    major.setValue("Art");
    errors = major.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });

  it('minor field validity', () => {
    let errors = {};
    let minor = component.portfolioForm.controls['minor'];

    // Set minor to something incorrect min length 3
    minor.setValue("At");
    errors = minor.errors || {};
    expect(errors['minlength']).toBeTruthy();
    expect(errors['pattern']).toBeFalsy();

    // Set minor to something incorrect
    minor.setValue("*t");
    errors = minor.errors || {};
    expect(errors['minlength']).toBeTruthy();
    expect(errors['pattern']).toBeTruthy();

    // Set minor to something correct
    minor.setValue("Art");
    errors = minor.errors || {};
    expect(errors['minlength']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });


  it('Degree field validity ', () => {
    let errors = {};
    let degree = component.portfolioForm.controls['degree'];

    //Degree field is required
    errors = degree.errors || {};
    expect(errors['required']).toBeTruthy();
  });
});
