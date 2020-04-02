import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the showSearch tab', ()=> {
    expect(component.showSearch).toBe(false, 'Off at first');
    component.toggleDisplay();
    expect(component.showSearch).toBe(true, 'After one click should be visible');
    component.toggleDisplay();
    expect(component.showSearch).toBe(false, 'After second click it should not be visible');    
  });

  it('Verify the header links', ()=>{
    const bannerElement: HTMLCollection = document.getElementsByClassName('nav-link');
    let links = ['Design','Product', 'About Us']
    for (const [i,link] of links.entries()) {
      expect(bannerElement[i].textContent).toEqual(link); 
    }
  });
  
});
