/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CountryMapperServiceService } from './CountryMapperService.service';

describe('Service: CountryMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountryMapperServiceService]
    });
  });

  it('should ...', inject([CountryMapperServiceService], (service: CountryMapperServiceService) => {
    expect(service).toBeTruthy();
  }));
});
