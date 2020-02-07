import { Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit, DoCheck{
 
  

  name = 'Godot';

  friends = ['ola', 'uber']

  destroy = true

  realTimeName: string = name;

  destroyChild2(){
    this.destroy = !this.destroy
  }

  getNewNameFromChild(e) {
    console.log('Inside parent!');
    console.log(e);
    this.name = e;
  }

  getNewNameInRealTime(e) {
    console.log('Real Time!');
    console.log(e);
    this.realTimeName = e;

  }

  constructor() {
    console.log("In constructor in parent");
    this.friends.push("che")

    setTimeout(()=>{
      this.friends.push('drv')
      console.log("3000: " + this.friends);
    }, 3000)


    setTimeout(()=>{
      this.friends.push('oli')
      console.log("8000: " + this.friends);
    }, 8000)



   }

  ngOnInit() {
    console.log("In ngOnInit in parent");
  }

  ngDoCheck(): void {
    console.log("In ngDoCheck");
    console.log(this.friends);
  }

 

}
