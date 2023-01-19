import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation-example',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.css']
})
export class InterpolationExampleComponent implements OnInit {
  pageHeader: string = 'Interpolation-One way data-binding';
  firstName:string='fn';
  lastName:string='ln';
  isDisabled:boolean=false;
  fontSize: number = 20;
  constructor() { }
  getFullName():string {
    return this.firstName + ', '+ this.lastName;

  }


  ngOnInit() {
  }
  EventBindingClick(): void {
    console.log('Event binding -Button Clicked');
}
ClassToApply:string='boldClass colorClass italicsClass'
ApplyBold:boolean=true
ClassColor:boolean=true

addClass(){
  let classes={
    colorClass:this.ClassColor

  };
  return classes;
}
//style binding
isBold: boolean = true;
isItalic: boolean = true;
color:string ="red";
addStyles() {
  let styles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-size.px': this.fontSize,
      'color':this.color
  };
  return styles;
}
}
