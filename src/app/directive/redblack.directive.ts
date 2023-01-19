import { Directive, ElementRef, Renderer2, Input, OnInit,HostListener } from '@angular/core';

@Directive({
  selector: '[appRedblack]'
})
export class RedblackDirective implements OnInit {
  @Input() defaultColor: string

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    console.log(elem);
    elem.nativeElement.style.color= "red";
    elem.nativeElement.style.backgroundColor= "blue";
  }

  ngOnInit() {
    if (this.defaultColor) {
      this.setBgColor(this.defaultColor)
    } else {
      this.setBgColor('white')
    }
  }

  setBgColor(color: string) {
    this.renderer.setStyle(
      this.elem.nativeElement,
      'backgroundColor',
      color
    )
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.defaultColor || 'pink');
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.highlight(null);
    this.highlight('blue');
  }
  @HostListener('mouseleave') onClick() {
    // this.highlight(null);
    this.highlight('yellow');
  }
  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }

}
