import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingItemComponent } from './pricing-item.component';

describe('PricingItemComponent', () => {
  let component: PricingItemComponent;
  let fixture: ComponentFixture<PricingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
