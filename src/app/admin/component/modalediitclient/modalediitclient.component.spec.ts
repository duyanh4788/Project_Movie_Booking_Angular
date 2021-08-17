import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalediitclientComponent } from './modalediitclient.component';

describe('ModalediitclientComponent', () => {
  let component: ModalediitclientComponent;
  let fixture: ComponentFixture<ModalediitclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalediitclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalediitclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
