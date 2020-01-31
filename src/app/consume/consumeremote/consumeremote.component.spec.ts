import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeremoteComponent } from './consumeremote.component';

describe('ConsumeremoteComponent', () => {
  let component: ConsumeremoteComponent;
  let fixture: ComponentFixture<ConsumeremoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeremoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeremoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
