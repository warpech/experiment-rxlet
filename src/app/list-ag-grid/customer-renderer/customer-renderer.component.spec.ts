import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRendererComponent } from './customer-renderer.component';

describe('CustomerRendererComponent', () => {
  let component: CustomerRendererComponent;
  let fixture: ComponentFixture<CustomerRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
