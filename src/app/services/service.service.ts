import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  Hello(){
    return "Hello from Angular services"
  }
}
