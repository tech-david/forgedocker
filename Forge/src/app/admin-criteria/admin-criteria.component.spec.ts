import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCriteriaComponent } from './admin-criteria.component';

describe('AdminCriteriaComponent', () => {
  let component: AdminCriteriaComponent;
  let fixture: ComponentFixture<AdminCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCriteriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
