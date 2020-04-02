import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import { DesignComponent } from './design.component';
import { PhotosService } from 'src/app/common-services/photos.service';

describe('DesignComponent', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers:[
        PhotosService
      ],
      declarations: [ DesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.url).toBeUndefined();
  });

  it('should initialize with 11 photos',()=>{
    expect(component.length).toEqual(11);
  });

  it('should contain pics object',() => {
    expect(component.pics).toBeInstanceOf(Object);
  });

  it('should respond to scroll event', ()=>{
    component.onScroll(event);
    expect(component.pics.length).not.toEqual(11)
  });

  
});
