import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalschedulemovieComponent } from './modalschedulemovie.component';

describe('ModalschedulemovieComponent', () => {
  let component: ModalschedulemovieComponent;
  let fixture: ComponentFixture<ModalschedulemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalschedulemovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalschedulemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
