import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css']
})
export class SuperComponent implements OnInit {

  friends = ['ola', 'uber', 'swiggy', 'zoom', 'sophi', 'mary', 'eval']
  locations = [
    {
      city:'chennai',
      code:'044'
    },
    {
      city:'delhi',
      code:'011'
    },
    {
      city:'mumbai',
      code:'022'
    },
    {
      city:'bengaluru',
      code:'080'
    }
  ]
  display = true
  displayElse = true
  name = "prafful"

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay = function(){
    this.display = this.display ? false:true
    console.log(this.display);
  }

  toggleElseDisplay = function(){
    this.displayElse = this.displayElse ? false:true
    console.log(this.displayElse);
  }

  callMe = function(counterReceived){
    console.log("Button Clicked! for " + counterReceived +  ": "  + this.friends[counterReceived]);
  }

}
