import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVirtualScrollComponent } from './list-virtual-scroll.component';

describe('ListVirtualScrollComponent', () => {
  let component: ListVirtualScrollComponent;
  let fixture: ComponentFixture<ListVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVirtualScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
