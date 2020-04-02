import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  filters: any[];
  /**
   * These filter can also come from http get request to a database
   */
  constructor() {}

  filtersForPage(page:string){
    switch (page) {
      case '/design':
        return this.filters = ['Type Of Organization','Events','Trend','Great For'];
      case '/product':
        return this.filters =  ['Type', 'Brands', 'Trend', 'Made For', 'Price'];
      default:
        return this.filters = ['Type Of Organization','Events','Trend','Great For'];
    }
  }
}
