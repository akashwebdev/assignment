import { TestBed } from '@angular/core/testing';

import { PhotosService } from './photos.service';

describe('PhotosService', () => {
  let service: PhotosService;
  
  let demoOutput = {
    url : "testurl",
    class: 123
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Must be a valid class', () => {
    let data = service.firstPageLoad();
    expect(typeof data[0].class).not.toEqual(typeof demoOutput.class);
  })

  it('Class must not be number', () => {
    let data = service.firstPageLoad();
    expect(typeof data[0].class).not.toEqual(typeof demoOutput.class);
  });

  it('First load must be of 11 elements',()=>{
    let data = service.firstPageLoad();
    expect(data.length).toEqual(11);
  });


});
