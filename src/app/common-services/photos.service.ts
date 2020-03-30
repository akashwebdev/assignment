import { Injectable } from '@angular/core';
interface elemType{
  url : string,
  class : string
}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = new Array();
  constructor() { }

  firstPageLoad(){
    for(let i=1;i<=11;i++){
      let wd = 600;
      let cls = Math.random() > 0.8 ? 'big' : (Math.random() > 0.4 ? 'medium' : 'normal');
      let obj:elemType = {
        "url" : "https://picsum.photos/" + wd +"/"+wd + "/?random&t=" + Math.floor(Math.random()*(10**7)),
        "class" : cls
      };
      this.url.push(obj);
    }
    return this.url;
  }
  
}
