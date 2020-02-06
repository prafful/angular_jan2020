import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cts-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.css']
})
export class Route3Component implements OnInit {

  activeRoute:any

  constructor(private active:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute = this.active
    console.log(this.activeRoute.snapshot.url[0].path);
  }

}
