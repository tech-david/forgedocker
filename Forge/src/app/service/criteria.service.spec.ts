import { TestBed } from '@angular/core/testing';
import { CriteriaService } from './criteria.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminServiceService } from './admin-service.service';
import { Criteria } from '../models/criteria';

describe('CriteriaService', () => {
  let service: CriteriaService,
  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [AdminServiceService]
    });
    service = TestBed.inject(CriteriaService);
    httpMock = TestBed.inject(HttpTestingController);

  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should update the criteria value ', () => {
    const criteria = {id: 2,criteriaName:'education',entryAmount: '1', requirements: '1'};
    const dummyValue : Criteria = {id: 1,criteriaName:'education',entryAmount: '1', requirements: '1'};

    service.updateCriteria(criteria).subscribe(criteria1 => {
      expect(criteria).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.criteriaUrl}/update`);
    expect(request.request.method).toBe('POST');
    request.flush(dummyValue);
  });
  it('should return criteria by id ', () => {
    const criteriaName = 'edu';
    const dummyValue: Criteria = { id: 1, criteriaName: 'education', entryAmount:'1',requirements:'3' };

    service.getCriteriaByName(criteriaName).subscribe(criteria1 => {
      expect(dummyValue).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.criteriaUrl}/${criteriaName}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyValue);
  });
});
