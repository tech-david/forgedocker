import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAdminComponent } from './navbar-admin.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarAdminComponent', () => {
  let component: NavbarAdminComponent;
  let fixture: ComponentFixture<NavbarAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({      
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ NavbarAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
