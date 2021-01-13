import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RegisterUserService } from './reg-user-service.service';

describe('RegUserServiceService', () => {
  let service: RegisterUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RegisterUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
