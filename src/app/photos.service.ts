import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = new Array();
  constructor() { }

  firstPageLoad(){
    for(let i=0;i<16;i++){
      let wd = this.getRandomSize(200,400);
      let classes= ['indigo', 'blue', 'grren', 'red'];
      this.url.push({
        "url" : "https://picsum.photos/" + wd + "/" + wd + "/?random&t=" + new Date().getTime(),
        "width" : wd,
        "height": wd
      });
    }
    return this.url;
  }

  getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
}
