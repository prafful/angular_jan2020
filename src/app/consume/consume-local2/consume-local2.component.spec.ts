import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeLocal2Component } from './consume-local2.component';

describe('ConsumeLocal2Component', () => {
  let component: ConsumeLocal2Component;
  let fixture: ComponentFixture<ConsumeLocal2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeLocal2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeLocal2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
