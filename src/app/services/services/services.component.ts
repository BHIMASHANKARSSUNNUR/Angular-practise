import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  msg:string="";
  constructor(private serv:ServiceService){}

  ngOnInit(){
    this.msg=this.serv.Hello()
  }
}
