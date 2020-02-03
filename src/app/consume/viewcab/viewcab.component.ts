import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'cts-viewcab',
  templateUrl: './viewcab.component.html',
  styleUrls: ['./viewcab.component.css']
})
export class ViewcabComponent implements OnInit {

  idReceived: any
  cabDetail:any

  constructor(private activeRoute:ActivatedRoute, private remote: RemoteService) { }

  ngOnInit() {
    console.log("In viewcab component with activated route!");
    console.log(this.activeRoute)
    this.idReceived = this.activeRoute.snapshot.params.myid
    console.log("Received ID: " + this.idReceived);
    //retrive the cab with given id -> idReceived
    this.remote.getCabById(this.idReceived).subscribe(data=>{
      console.log("Cab Details :");
      console.log(data);
      this.cabDetail = data
    }, error=>{
      console.log(error);
    })
  }

}
