import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcab',
  templateUrl: './editcab.component.html',
  styleUrls: ['./editcab.component.css']
})
export class EditcabComponent implements OnInit {

  receivedId: any;
  editCab: any;

  constructor(private remote: RemoteService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.receivedId = this.activeRoute.snapshot.params.editId;
    console.log('Editing cab with id: '  + this.receivedId);
    this.searchCabById(this.receivedId);
  }

  searchCabById(id) {
    this.remote.getCabById(id).subscribe(data => {
      console.log(data);
      this.editCab = data;
    }, error => {
      console.log(error);
    });
  }

  editCurrentCab(cab) {
    console.log('Updated cab: ');
    console.log(cab.value);
    this.remote.updateCab(this.receivedId, cab.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });

  }

}
