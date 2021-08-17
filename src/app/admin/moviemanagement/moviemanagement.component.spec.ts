import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviemanagementComponent } from './moviemanagement.component';

describe('MoviemanagementComponent', () => {
  let component: MoviemanagementComponent;
  let fixture: ComponentFixture<MoviemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviemanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
