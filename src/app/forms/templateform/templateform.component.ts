import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  fn:string = 'prafful'
  ln:string = 'daga'
  sl:number = 88
  loc: string = 'chennai'

  constructor() { }

  ngOnInit() {
  }

  userAdded = function(uf){
    console.log(this.fn);
    console.log("Add button clicked!");
    console.log(uf.value);
  }

}
