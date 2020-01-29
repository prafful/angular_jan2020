import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  friends = ['ola', 'uber', 'swiggy', 'zoom', 'sophi', 'mary', 'eval']
  name = 'prafful'
  salary = 8888
  message = "i am going to learn angular"
  birthday = new Date()

  constructor() { }

  ngOnInit() {
  }

}
