import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularInterview';
  userText: string = 'prasanta';
  constructor(){
    console.log('constructor fire');

  }
  ngOnInit(){
    console.log('ngOnInit fire');

  }
}
