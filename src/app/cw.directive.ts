import { Directive,  ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appCw]'
})
export class CwDirective {
  el = this.elementRef.nativeElement;
  constructor( private elementRef: ElementRef) { }
  @HostListener('keyup', ['$event.target.value'])
  keyUp(value) {
    this.el.value = value.replace(/[^\s0-9]+/, '');
    if(value.length >= 4){
      this.el.value = value.slice(0,value.length-1);
    }
  }

}
