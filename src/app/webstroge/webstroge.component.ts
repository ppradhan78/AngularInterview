import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webstroge',
  templateUrl: './webstroge.component.html',
  styleUrls: ['./webstroge.component.css']
})
export class WebstrogeComponent implements OnInit {
  localstrogeValue:string;

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem("localStroge"));
    console.log(sessionStorage.getItem("sessionStorage"));
  }
  Setvalue(){
    localStorage.setItem("localStroge",this.localstrogeValue);
    sessionStorage.setItem("sessionStorage",this.localstrogeValue);

  }


}
