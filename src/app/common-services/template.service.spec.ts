import { TestBed } from '@angular/core/testing';

import { TemplateService } from './template.service';

describe('TemplateService', () => {
  let service: TemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a html template', ()=>{
    let stubElem = [{
      url:"string",
      width: 10,
      height: 10
    }];
    let htmlElem = service.selectTemplate(stubElem);
    expect(typeof htmlElem).toBeInstanceOf(String);
  });

});