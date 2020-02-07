import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Local1Service {

  scores = [1, 2, 3];

  displayScore() {
    console.log('I am in local1 service!');
    console.log(this.scores);
  }

  getScore() {
    return this.scores;
  }

  addScore(v) {
    this.scores.push(v);
  }

  constructor() { }
}
