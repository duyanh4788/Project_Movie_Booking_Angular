import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaladdmovieComponent } from './modaladdmovie.component';

describe('ModaladdmovieComponent', () => {
  let component: ModaladdmovieComponent;
  let fixture: ComponentFixture<ModaladdmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaladdmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaladdmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
