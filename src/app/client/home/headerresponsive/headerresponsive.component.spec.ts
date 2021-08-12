import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderresponsiveComponent } from './headerresponsive.component';

describe('HeaderresponsiveComponent', () => {
  let component: HeaderresponsiveComponent;
  let fixture: ComponentFixture<HeaderresponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderresponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
