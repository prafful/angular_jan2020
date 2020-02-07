import { Component, OnInit } from '@angular/core';
import { RemoteService } from 'src/app/services/remote.service';

@Component({
  selector: 'app-addcab',
  templateUrl: './addcab.component.html',
  styleUrls: ['./addcab.component.css']
})
export class AddcabComponent implements OnInit {

  name: any;
  location: any;
  description: any;
  score: any;
  image: any;

  constructor(private remote: RemoteService) { }

  ngOnInit() {

  }

  addCab = function(cab) {
    console.log(cab);
    console.log(cab.value);
    // write code to remove fakepath strings from cab.value.image
    this.remote.addCab(cab.value).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
    });

  };

}
