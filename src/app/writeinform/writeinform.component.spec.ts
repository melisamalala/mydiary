import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteinformComponent } from './writeinform.component';

describe('WriteinformComponent', () => {
  let component: WriteinformComponent;
  let fixture: ComponentFixture<WriteinformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteinformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteinformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
