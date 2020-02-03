import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-consumeremote',
  templateUrl: './consumeremote.component.html',
  styleUrls: ['./consumeremote.component.css']
})
export class ConsumeremoteComponent implements OnInit {

  users:any
  allCabs: any

  constructor(private remote:RemoteService, private router:Router) { }

  ngOnInit() {

   
    //this.remote.getRemoteUsers().subscribe(this.successFunction, this.failureFunction)
   /*  this.remote.getRemoteUsers().subscribe(function(data){
        console.log(data);
        this.users = data
        console.log("Assigned data to users!");
        console.log(this.users);
    }, function(error){
        console.log(error)
    })
    */
 

   this.remote.getRemoteUsers().subscribe(data=>{
      console.log(data);
      this.users = data
      console.log("Assigned data to users!");
      console.log(this.users);
    }, error=>{
      console.log(error)
    })

    this.remote.getAllCabs().subscribe(data=>{
      this.allCabs = data
    }, failure=>{
      console.log(failure);
    })

    
  
}

seeCabDetail = function(id){
  console.log("Get cab details for: " + id)
  this.router.navigate(['/viewcab', id])
}

 /*  successFunction = function(data){
    console.log(data);
  }

  failureFunction = function(error){
    console.log(error);
  } */

}
