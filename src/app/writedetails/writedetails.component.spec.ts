import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritedetailsComponent } from './writedetails.component';

describe('WritedetailsComponent', () => {
  let component: WritedetailsComponent;
  let fixture: ComponentFixture<WritedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
