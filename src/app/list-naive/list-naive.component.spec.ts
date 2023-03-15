import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNaiveComponent } from './list-naive.component';

describe('ListNaiveComponent', () => {
  let component: ListNaiveComponent;
  let fixture: ComponentFixture<ListNaiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNaiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNaiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
