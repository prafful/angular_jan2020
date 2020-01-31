import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'cts-consumeremote',
  templateUrl: './consumeremote.component.html',
  styleUrls: ['./consumeremote.component.css']
})
export class ConsumeremoteComponent implements OnInit {

  users:any

  constructor(private remote:RemoteService) { }

  ngOnInit() {
    this.remote.getRemoteUsers().subscribe(data=>{
      console.log(data);
      this.users = data
      console.log("Assigned data to users!");
      console.log(this.users);
    }, error=>{
      console.log(error)
    })
  }

 /*  successFunction = function(data){
    console.log(data);
  }

  failureFunction = function(error){
    console.log(error);
  } */

}
