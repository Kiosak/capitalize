import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective {

  // if you want to capitalize input when component initialed
  // uncomment constructor and delete onFocusOut()
  // and ADD else statement in onFocusIn()
  // else {
  //   this.dirty = true;
  // }
  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.textTransform = 'capitalize';
  }

  private dirty = false;

  @HostListener('focusout') onFocusOut() {
    if (!this.dirty) {
      this.transform('capitalize');
      this.dirty = true;
    }
  }

  @HostListener('focusin') onFocusIn() {
    if (this.dirty) {
      this.transform('none');
    }
  }

  private transform(val: string) {
   this.elementRef.nativeElement.style.textTransform = val;
  }
}
