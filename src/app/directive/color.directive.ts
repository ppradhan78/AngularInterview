import { Directive,ElementRef, AfterViewInit } from '@angular/core';
import { ThrowStmt  } from '@angular/compiler';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements AfterViewInit {

  constructor(private eleRef: ElementRef) { }

  ngAfterViewInit() {
    this.eleRef.nativeElement.style.color='red';
      }

     Change(Changecolor: string){
        this.eleRef.nativeElement.style.color= Changecolor;
      }

}
