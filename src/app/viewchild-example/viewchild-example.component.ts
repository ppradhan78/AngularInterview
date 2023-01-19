import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import {ColorDirective} from '../directive/color.directive';


@Component({
  selector: 'app-viewchild-example',
  templateUrl: './viewchild-example.component.html',
  styleUrls: ['./viewchild-example.component.css']
})
export class ViewchildExampleComponent implements AfterViewInit {

@ViewChild(ColorDirective,{ static: false}) colorDirective:ColorDirective;

@ViewChild('name', {static: false}) nameelementref:ElementRef;
@ViewChild('state', {static: false}) stateelementref:ElementRef;

  constructor() { }

  ngAfterViewInit() {

    this.nameelementref.nativeElement.style.backgroundColor='silver';
    this.nameelementref.nativeElement.style.color='green';

    this.stateelementref.nativeElement.style.backgroundColor='orange';
    this.stateelementref.nativeElement.style.color='white';
  }

  changeColor(color: string){
    this.colorDirective.Change(color);
  }
message:string;
count:number=0;
increment(){
  this.count=this.count+1;
  this.message="counter " +  this.count;
}
decrement(){
  this.count=this.count- 1;
  this.message="counter " +  this.count;
}
}
