import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPortViewComponent } from './admin-port-view.component';
import { FormBuilder} from '@angular/forms';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminPortViewComponent', () => {
  let component: AdminPortViewComponent;
  let fixture: ComponentFixture<AdminPortViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      
      imports: [ HttpClientTestingModule,RouterTestingModule ],
      declarations: [ AdminPortViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPortViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
