import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVirtualScrollRxLetComponent } from './list-virtual-scroll-rxlet.component';

describe('ListVirtualScrollComponent', () => {
  let component: ListVirtualScrollRxLetComponent;
  let fixture: ComponentFixture<ListVirtualScrollRxLetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListVirtualScrollRxLetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListVirtualScrollRxLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
