import { Component, OnInit } from '@angular/core';
import { Local1Service } from 'src/app/services/local1.service';

@Component({
  selector: 'cts-consume-local1',
  templateUrl: './consume-local1.component.html',
  styleUrls: ['./consume-local1.component.css']
})
export class ConsumeLocal1Component implements OnInit {

  scoreFromService:any

  //inject local1 service in this component
  //this is called dependency injection!
  constructor(private loc1:Local1Service) { }

  ngOnInit() {
    this.scoreFromService = this.loc1.getScore()
    this.loc1.displayScore()
    console.log(this.loc1.getScore());

    
    
  }

  addValue = function(){
    console.log("Called!");
    var lastValue = this.loc1.scores.pop()
    console.log(lastValue);
    this.loc1.addScore(lastValue)
    this.loc1.addScore(lastValue+1)
    this.scoreFromService = this.loc1.getScore()
    console.log(this.scoreFromService);

  }

}
