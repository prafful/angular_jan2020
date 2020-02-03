import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcabComponent } from './viewcab.component';

describe('ViewcabComponent', () => {
  let component: ViewcabComponent;
  let fixture: ComponentFixture<ViewcabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
