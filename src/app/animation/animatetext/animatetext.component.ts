import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
    selector: 'app-animate',
/*     template:`<h1>This is animate text component!</h1>
                <p>This is paragraph!</p>`, */
    templateUrl: './animatetext.component.html',
    styleUrls: ['./animatetext.component.css'],
    animations: [
        trigger('myanimate', [
                                state('state1', style({
                                    transform: 'skew(10deg, 10deg)',
                                    color: 'red',
                                    letterSpacing: '5px'

                                })),
                                state('state2', style({
                                    transform: 'skew(-10deg, -10deg)',
                                    color: 'green'
                                })),
                                transition('state1<->state2', animate('500ms ease-in'))
        ])
    ]
})
export class AnimatetextComponent implements OnInit {

    currentState = 'state1';

    ngOnInit() {

    }

    animateText() {
        console.log(this.currentState);
        this.currentState = this.currentState === 'state1' ? 'state2' : 'state1';
    }

}
