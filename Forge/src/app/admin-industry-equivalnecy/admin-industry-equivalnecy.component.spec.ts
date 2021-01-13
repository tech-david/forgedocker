import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminIndustryEquivalnecyComponent } from './admin-industry-equivalnecy.component';

describe('AdminIndustryEquivalnecyComponent', () => {
  let component: AdminIndustryEquivalnecyComponent;
  let fixture: ComponentFixture<AdminIndustryEquivalnecyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminIndustryEquivalnecyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminIndustryEquivalnecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
