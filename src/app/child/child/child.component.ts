import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() name:string="";
  @Output() msg=new EventEmitter<string>();

  send(){
    this.msg.emit("Hello from child")
  }
}
