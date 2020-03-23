import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotosService } from '../photos.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  pics = new Array();
  length:number;
  url:string;
  
  constructor(private router: Router, private photoServ:PhotosService) {
    localStorage.setItem('page',this.router.url);
  }

  ngOnInit(): void {
    this.pics = this.photoServ.firstPageLoad();
    this.length = this.pics.length;

  }

  onScroll(ev){
    if(this.pics.length < 40){
      let morePics = this.photoServ.firstPageLoad();
      this.pics.push(morePics);
    }
  }

}
