import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  constructor(private el:ElementRef,private renderer:Renderer2){}
  changeColor(){
    const div=this.el.nativeElement.querySelector('.color-div');
    this.renderer.setStyle(div,'background-color','lightblue')
  }
}
