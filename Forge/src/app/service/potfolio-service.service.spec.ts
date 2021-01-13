import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';
import { Criteria } from '../models/criteria';
import { HttpClient } from '@angular/common/http';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService,
  httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [PotfolioServiceService,HttpClient]
    });
    service = TestBed.inject(PotfolioServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should return criteria by id ', () => {
    const criteriaId = 1;
    const dummyValue : Criteria = {id: 1,criteriaName:'education',criteriaValue: 1};

    service.getCriteriaById(criteriaId).subscribe(criteria1 => {
      expect(dummyValue).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.url}service/criteria/${criteriaId}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyValue);
  });
});
