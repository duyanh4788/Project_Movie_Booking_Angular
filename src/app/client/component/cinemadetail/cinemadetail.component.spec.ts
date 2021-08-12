import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemadetailComponent } from './cinemadetail.component';

describe('CinemadetailComponent', () => {
  let component: CinemadetailComponent;
  let fixture: ComponentFixture<CinemadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CinemadetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CinemadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
