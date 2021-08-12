import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercarouselComponent } from './footercarousel.component';

describe('FootercarouselComponent', () => {
  let component: FootercarouselComponent;
  let fixture: ComponentFixture<FootercarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
