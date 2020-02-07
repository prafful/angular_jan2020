import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route1',
  templateUrl: './route1.component.html',
  styleUrls: ['./route1.component.css']
})
export class Route1Component implements OnInit {


  activeRoute: any;

  constructor(private active: ActivatedRoute) {

  }


  ngOnInit() {
    console.log('In ngOnInit');
    this.activeRoute = this.active;
    console.log(this.activeRoute.snapshot.url[0].path);
  }





}
