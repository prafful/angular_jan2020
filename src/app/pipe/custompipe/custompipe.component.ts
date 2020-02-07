import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  friends = ['ola', 'uber', 'zoom', 'abra', 'chia'];
  scores = [25, 2, 55, 5, 47, 98, 100];

  parameter = {
    key: 1,
    name: 'ola'
  };

  constructor() { }

  ngOnInit() {
  }

}
