import { Component, OnInit } from '@angular/core';
import { Local1Service } from 'src/app/services/local1.service';

@Component({
  selector: 'cts-consume-local2',
  templateUrl: './consume-local2.component.html',
  styleUrls: ['./consume-local2.component.css']
})
export class ConsumeLocal2Component implements OnInit {

  scoreFromService:any

  constructor(private loc2:Local1Service) { }

  ngOnInit() {
    console.log("Consume 2 component!");
    this.loc2.displayScore()

  }


  addValue = function(){
    console.log("Called!");
    var lastValue = this.loc2.scores.pop()
    console.log(lastValue);
    this.loc2.addScore(lastValue)
    this.loc2.addScore(lastValue+1)
    this.scoreFromService = this.loc2.getScore()
    console.log(this.scoreFromService);

  }

}
