import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminServiceService } from './admin-service.service';
import { Criteria } from '../models/criteria';



describe('AdminServiceService', () => {
  let service: AdminServiceService,
  httpMock: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [AdminServiceService]
    });
    service = TestBed.inject(AdminServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should update the criteria value ', () => {
    const criteria = {id: 1,criteriaName:'education',criteriaValue: 1};
    const dummyValue : Criteria = {id: 1,criteriaName:'education',criteriaValue: 1};

    service.updateCriteria(criteria).subscribe(criteria1 => {
      expect(criteria).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.updateCriteriaUrl}`);
    expect(request.request.method).toBe('PUT');
    request.flush(dummyValue);
  });

});
