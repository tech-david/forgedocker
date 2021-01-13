import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PotfolioServiceService } from './potfolio-service.service';
import { Criteria } from '../models/criteria';
import { Portfolio } from '../models/portfolio';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('PotfolioServiceService', () => {
  let service: PotfolioServiceService;
  let portfolio: Portfolio;
  let httpMock: HttpTestingController;
  let httpClientSpy: { get: jasmine.Spy };
  let expectedId;
  let expectedPortfolio;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PotfolioServiceService, HttpClient]
    });
    service = TestBed.inject(PotfolioServiceService);
    httpMock = TestBed.inject(HttpTestingController);
    expectedId = 1;
    expectedPortfolio = {
      id: 1,
      status: "pending",
      userId: 1,
      portfolioSection: [
        {
          portfolioItemsId: 1,
          portfolioId: 1,
          priority: 1,
          title: "AboutMe",
          items: [{
            id: 1,
            description: "Hello Bald man",
            portfolioItemsId: 1
          }]
        },
        {
          portfolioItemsId: 2,
          portfolioId: 1,
          priority: 2,
          title: "Education",
          items: [{
            id: 1,
            university: "Something",
            graduation: "1999",
            major: "Clowning",
            minor: "",
            degree: "Masters",
            portfolioItemsId: 2
          },
          {
            id: 2,
            university: "SMU",
            graduation: "2232",
            major: "Tech",
            minor: "",
            degree: "Masters",
            portfolioItemsId: 2
          }
          ]
        }
      ]
    }

  });

  it('should return portfolio by id', () => {
    service.getPortfolioById(expectedId).subscribe(portfolio => {
      console.log("the portfolio");
      console.log(portfolio);
      expect(expectedId).toEqual(portfolio.id);
    })
    const request = httpMock.expectOne(`${service.url}service/getPortfolioByID?id=${expectedId}`);
    console.log(request);
    expect(request.request.method).toBe('GET');
    request.flush(expectedPortfolio);
  })

  it('should return education portfolioItems by id', () => {
    service.getEducationById(2).subscribe(data =>{
      console.log("education items");
      console.log(data);
      let educationItems = new PortfolioItems;
      educationItems = data;
      console.log("expectPortfolioItemId");
      console.log(expectedPortfolio.portfolioSection[1]);
      expect(2).toEqual(expectedPortfolio.portfolioSection[1].portfolioItemsId);
    })
    const request = httpMock.expectOne(`${service.url}update/geteducation?id=${2}`);
    expect(request.request.method).toBe('GET');
    request.flush(expectedPortfolio.portfolioSection[1].portfolioItemsId); //do we even need this???
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should return criteria by id ', () => {
    const criteriaId = 1;
    const dummyValue: Criteria = { id: 1, criteriaName: 'education', criteriaValue: 1 };

    service.getCriteriaById(criteriaId).subscribe(criteria1 => {
      expect(dummyValue).toEqual(criteria1);

    })
    const request = httpMock.expectOne(`${service.url}service/criteria/${criteriaId}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyValue);
  });

});
