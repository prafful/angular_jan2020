import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  reactiveUserForm: any;
  fn: string;
  ln: string;
  sl: number;
  loc: string;

  constructor() { }

  ngOnInit() {
    this.reactiveUserForm = new FormGroup({
                                            fn: new FormControl('PD', Validators.compose([
                                                                                Validators.required,
                                                                                Validators.minLength(4),
                                                                                Validators.pattern('^[a-zA-Z]+$')
                                                                            ])),
                                            ln: new FormControl(),
                                            sl: new FormControl('', this.customValidator),
                                            loc: new FormControl()
                                        });
  }

  customValidator = function(formControl) {
    console.log(formControl);
    if (formControl.value < 100) {
      return {sl: true};
    }

  };

  userAdded = function(ruf) {
    console.log(ruf);
    console.log(ruf.value);
  };

}
