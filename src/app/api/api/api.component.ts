import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {

  posts:any[]=[];
// post: any;
  constructor(private api:ApiService){}

  ngOnInit(){
    this.api.getPosts().subscribe(
      (data)=>{
        this.posts=data;
      },
      (error)=>{
        console.error('error fetching posts',error)
      }
    )
  }
}
