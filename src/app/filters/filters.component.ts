import { Component, OnInit } from '@angular/core';
import { FiltersService } from '../filters.service';
import { Router } from '@angular/router';
import { Event } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filters:any[];
  constructor(private router:Router,private filterServ:FiltersService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event:Event) => {
      if(event) {
        this.filters = this.filterServ.filtersForPage(localStorage.getItem('page'));
      }
    });
  }
}
