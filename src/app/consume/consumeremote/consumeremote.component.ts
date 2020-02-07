import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { Router } from '@angular/router';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-consumeremote',
  templateUrl: './consumeremote.component.html',
  styleUrls: ['./consumeremote.component.css']
})
export class ConsumeremoteComponent implements OnInit {

  users: any;
  allCabs: any;

  constructor(private remote: RemoteService, private router: Router) { }

  ngOnInit() {


    // this.remote.getRemoteUsers().subscribe(this.successFunction, this.failureFunction)
   /*  this.remote.getRemoteUsers().subscribe(function(data){
        console.log(data);
        this.users = data
        console.log("Assigned data to users!");
        console.log(this.users);
    }, function(error){
        console.log(error)
    })
    */


   this.getRemoteUsers();

   this.getCabs();

}

getRemoteUsers() {
  this.remote.getRemoteUsers().subscribe(data => {
    console.log(data);
    this.users = data;
    console.log('Assigned data to users!');
    console.log(this.users);
  }, error => {
    console.log(error);
  });
}

getCabs() {
  this.remote.getAllCabs().subscribe(data => {
    this.allCabs = data;
  }, failure => {
    console.log(failure);
  });
}

seeCabDetail = function(id) {
  console.log('Get cab details for: ' + id);
  // http://localhost:4200/viewcab/2
  // http://localhost:4200/viewcab/4
  this.router.navigate(['/viewcab', id]);
};

openAddCabPage = function() {
  this.router.navigate(['/openaddcab']);
};

deleteCurrentCab(id) {
  console.log('Deleting cab with id: ' + id);
  this.remote.deleteCab(id).subscribe(data => {
    console.log('Delete Success!');
    console.log(data);
    this.getCabs();
  }, error => {
    console.log(error);
  });
}

editCabDetail(id) {
  this.router.navigate(['/editcab', id]);
}

 /*  successFunction = function(data){
    console.log(data);
  }

  failureFunction = function(error){
    console.log(error);
  } */

}
