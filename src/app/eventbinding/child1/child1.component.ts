import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cts-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

 @Input() sendname

 @Output() newName = new EventEmitter()

 @Output() realTimeChange = new EventEmitter()

 updateName(){
   //event called newName is emitted. 
   //ONLY Parent component can capture this event
  this.newName.emit(this.sendname)
 }

 realTimeName(){
  console.log("Check for realtime change");
  console.log(this.sendname);
  this.realTimeChange.emit(this.sendname)
 }

 

  constructor() { }

  ngOnInit() {
  }

}
