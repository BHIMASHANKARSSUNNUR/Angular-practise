import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private ele:ElementRef) { }
  @HostBinding('style.border') border:string=""
  ngOnInit(){
    this.border="5px solid green"
    console.log(this.border)
    this.ele.nativeElement.style.backgroundColor="lightblue"
  }

  @HostListener('mouseover') onMouseOver(){
    this.border="5px solid purple"
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.border="5px solid green"
  }

}
