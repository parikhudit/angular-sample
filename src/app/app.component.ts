import { Component, OnInit } from '@angular/core';
import * as postalCode from '../assets/postal-codes.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  code = "";
  result = ""; 
  ngOnInit() {
    console.log(postalCode.validate('W85TT', 'UK'))
   
  }
  validate() {
    console.log(this.code)
    if(postalCode.validate(this.code, 'UK')) {
      this.result = "Postal Code is valid."
    } else {
       this.result = "Postal Code is not valid."
    }
  }
}
