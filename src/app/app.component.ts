import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  page:string;
  constructor(){
    this.page=''
  }

  getPage(){
    return this.page;
  }

  setPage(pageName:string){
    this.page = pageName
  }
}
