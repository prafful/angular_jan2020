import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  friends = ['ola', 'uber', 'swiggy', 'zoom', 'sophi', 'mary', 'eval']

  constructor() { }

  ngOnInit() {
  }

  

  callMe = function(counterReceived){
    console.log("Button Clicked! for " + counterReceived +  ": "  + this.friends[counterReceived]);
  }

}
