import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

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
