import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'try';

  parentmessage:string="Hello from parent"
  receive:string="";

  rec(val){
    this.receive=val;
  }
  
  

 

}
