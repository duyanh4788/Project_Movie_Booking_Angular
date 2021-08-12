import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoveComponent } from './listmovie.component';

describe('ListMoveComponent', () => {
  let component: ListMoveComponent;
  let fixture: ComponentFixture<ListMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMoveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
