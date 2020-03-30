import { Injectable } from '@angular/core';
interface elemType{
  url : string,
  width: number,
  height: number
}
@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor() { }

  selectTemplate(imgList)
  {
    let arr =  ['template1'];
    let tempDesign = arr[Math.floor(Math.random() * arr.length)];
    let html = "";
    imgList.forEach((elem,index) => {
      let i = index+1;
      let e = <elemType><Object>elem;
      html += "<div class=\"imgWrap item"+i+"\">\
        <img src='"+e.url+"' class=\"img\">\
      </div>";
    });
    return html;
  }
}
