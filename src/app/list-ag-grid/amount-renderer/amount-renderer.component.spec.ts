import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountRendererComponent } from './amount-renderer.component';

describe('AmountRendererComponent', () => {
  let component: AmountRendererComponent;
  let fixture: ComponentFixture<AmountRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmountRendererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
