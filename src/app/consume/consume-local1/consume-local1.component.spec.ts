import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocal1Component } from './consume-local1.component';

describe('ConsumeLocal1Component', () => {
  let component: ConsumeLocal1Component;
  let fixture: ComponentFixture<ConsumeLocal1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocal1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocal1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
