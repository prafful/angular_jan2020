import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {



  fn: string;
  ln: string;
  sl: number;
  loc: string;

  constructor() { }

  ngOnInit() {
  }

  userAdded = function(uf) {
    console.log(this.fn);
    console.log('Add button clicked!');
    console.log(uf);
  };

}
