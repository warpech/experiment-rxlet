import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgGridComponent } from './list-ag-grid.component';

describe('ListNaiveComponent', () => {
  let component: ListAgGridComponent;
  let fixture: ComponentFixture<ListAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
