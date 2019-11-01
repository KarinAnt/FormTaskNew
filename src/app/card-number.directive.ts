import { Directive,  ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardNumber]'
})
export class CardNumberDirective {
  el = this.elementRef.nativeElement;
  constructor( private elementRef: ElementRef) { }
  @HostListener('keyup', ['$event.target.value'])
  keyUp(value) {
    this.el.value = value.replace(/[^\s0-9]+/, '');
    if(Math.floor(value.length/4) === (value.length%4 + 1)){
      this.el.value = value + ' ';
    }
    if(value.length >= 20){
      this.el.value = value.slice(0,value.length-1);
    }
  }
}
