import { TestBed } from '@angular/core/testing';

import { FiltersService } from './filters.service';

describe('FiltersService', () => {
  let service: FiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('page should always be string',()=>{
    service = new FiltersService;
    expect(service.filtersForPage('')).toEqual(['Type Of Organization','Events','Trend','Great For']);
  });

  it('filters must be undefined', () => {
    service = new FiltersService;
    expect(service.filters).toEqual(undefined);
  });

});
