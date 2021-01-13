import { ComponentFixture, TestBed} from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserHomeComponent } from './user-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Portfolio } from '../models/portfolio';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { PortfolioService } from '../service/potfolio-service.service';

describe('UserHomeComponent', () => {
  let component: UserHomeComponent;
  let fixture: ComponentFixture<UserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should create new portfolio', () => {
    let portfolio = component.createPortfolio;
   expect(portfolio).toBeTruthy();
  });
});
