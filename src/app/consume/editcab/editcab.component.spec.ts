import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcabComponent } from './editcab.component';

describe('EditcabComponent', () => {
  let component: EditcabComponent;
  let fixture: ComponentFixture<EditcabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
