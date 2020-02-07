import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, OnChanges {
  



 @Input() sendname;

 @Output() newName = new EventEmitter();

 @Output() realTimeChange = new EventEmitter();

 updateName() {
   // event called newName is emitted.
   // ONLY Parent component can capture this event
  this.newName.emit(this.sendname);
 }

 realTimeName() {
  console.log('Check for realtime change');
  console.log(this.sendname);
  this.realTimeChange.emit(this.sendname);
 }

  constructor() {
    console.log("In constructor");

   }

   ngOnChanges(changes: SimpleChanges) {
    console.log("In ngOnChanges");
    console.log(changes);
    for(let propertyName in changes){
      let change = changes[propertyName]
      let current = JSON.stringify(change.currentValue)
      let previous = JSON.stringify(change.previousValue)
      let message = propertyName +': currentValue: ' + current + ', previousValue: ' + previous
      console.log(message);
     }
  }

  ngOnInit() {
    console.log("In ngOnInit");
  }

}
