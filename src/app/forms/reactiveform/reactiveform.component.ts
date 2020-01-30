import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'cts-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveUserForm: any
  fn:string
  ln:string
  sl:number
  loc:string

  constructor() { }

  ngOnInit() {
    this.reactiveUserForm = new FormGroup({
                                            fn: new FormControl('PD', Validators.compose([
                                                                                Validators.required,
                                                                                Validators.minLength(4)
                                                                            ])),
                                            ln: new FormControl(),
                                            sl: new FormControl(),
                                            loc:new FormControl()
                                        })
  }

  userAdded = function(ruf){
    console.log(ruf);
  }

}
