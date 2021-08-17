import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleditmovieComponent } from './modaleditmovie.component';

describe('ModaleditmovieComponent', () => {
  let component: ModaleditmovieComponent;
  let fixture: ComponentFixture<ModaleditmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModaleditmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleditmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
