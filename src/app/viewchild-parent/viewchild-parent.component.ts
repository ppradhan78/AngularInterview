import { Component, OnInit,ViewChild } from '@angular/core';
import { ViewchildExampleComponent  } from '../viewchild-example/viewchild-example.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit {
  @ViewChild(ViewchildExampleComponent,{ static: false}) viewchildExampleComponent:ViewchildExampleComponent;
  constructor() { }

  ngOnInit() {
  }
  increment(){
    this.viewchildExampleComponent.increment();
  }
  decrement(){
    this.viewchildExampleComponent.decrement();
  }
}
