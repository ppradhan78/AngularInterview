import { Component, OnInit } from '@angular/core';
//import { NgXCookies } from 'ngx-cookies/ngx-cookies';

@Component({
  selector: 'app-cookiesexample',
  templateUrl: './cookiesexample.component.html',
  styleUrls: ['./cookiesexample.component.css']
})
export class CookiesexampleComponent implements OnInit {

  // constructor(private cookies:NgXCookies) { }
  constructor() { }


  ngOnInit() {
  }
  SetCookies(){
   // NgXCookies.setCookie("UserName","optum");
  }
}
