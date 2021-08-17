import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalinfouserComponent } from './modalinfouser.component';

describe('ModalinfouserComponent', () => {
  let component: ModalinfouserComponent;
  let fixture: ComponentFixture<ModalinfouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalinfouserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalinfouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
