import { Component } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  myForm!:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.myForm=this.fb.group({
      name:[''],
      email:[''],
    })
  }
  onSubmit(){
    console.log(this.myForm.value)
  }
}
