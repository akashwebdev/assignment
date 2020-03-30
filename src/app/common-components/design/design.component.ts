import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../../common-services/photos.service';
import { TemplateService } from '../../common-services/template.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  pics = new Array();
  length:number;
  url:string;
  
  constructor(private router: Router, 
    private photoServ:PhotosService,
    private tempServ: TemplateService,
    private elementRef:ElementRef
    ) {
    localStorage.setItem('page',this.router.url);
  }

  ngOnInit(): void {
    this.pics = this.photoServ.firstPageLoad();
    this.length = this.pics.length;
  }

  onScroll(ev){

    if(this.pics.length <= 44)
    {
      let morePics = this.photoServ.firstPageLoad();
      console.log(morePics);
      this.pics.push(morePics);
    }
  }

}
