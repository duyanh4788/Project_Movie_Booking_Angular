import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmannagementComponent } from './clientmannagement.component';

describe('ClientmannagementComponent', () => {
  let component: ClientmannagementComponent;
  let fixture: ComponentFixture<ClientmannagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientmannagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmannagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
