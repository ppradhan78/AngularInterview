import { Component, OnInit,HostListener, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  localstrogeValue:string;
  sessionStorage:string;
  componentName: "Home";

  constructor(private element:ElementRef,private render:Renderer ) { }

  ngOnInit() {
    console.log(localStorage.getItem("localStroge"));
    console.log(sessionStorage.getItem("sessionStorage"));
  }
  Getvalue(){
    this.localstrogeValue=localStorage.getItem("localStroge");
    this.sessionStorage=sessionStorage.getItem("sessionStorage");

  }
@HostListener('click') onclick(){
alert('click');
}

@HostListener('mouseover') mouseover(){
  this.changeColor('pink');
  }
  @HostListener('mouseleave') mouseleave(){
    this.changeColor('cyan');
    }
changeColor(color:string){
  this.render.setElementStyle(this.element.nativeElement,'color',color);
}

}
