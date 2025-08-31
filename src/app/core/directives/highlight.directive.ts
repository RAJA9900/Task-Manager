import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',standalone:true
})
export class HighlightDirective {

  //  constructor() { }
  @Input('appHighlight') color = 'rgba(255, 235, 59, 0.35)';
constructor(private el: ElementRef<HTMLElement>) {}
@HostListener('mouseenter') onEnter() {
this.el.nativeElement.style.backgroundColor = this.color;
}
@HostListener('mouseleave') onLeave() {
this.el.nativeElement.style.backgroundColor = '';
}

}
