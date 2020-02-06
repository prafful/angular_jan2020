import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'cts-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {
  
  simple: SimpleChanges

  ngOnChanges(simple) {
    console.log(this.simple);
    
  }

  name = "Godot"

  realTimeName:string = name

  getNewNameFromChild(e){
    console.log("Inside parent!");
    console.log(e);
    this.name = e
  }

  getNewNameInRealTime(e){
    console.log("Real Time!");
    console.log(e);
    this.realTimeName = e

  }

  constructor() { }

  ngOnInit() {
  }

}
