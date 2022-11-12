import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingItemFeatureComponent } from './pricing-item-feature.component';

describe('PricingItemFeatureComponent', () => {
  let component: PricingItemFeatureComponent;
  let fixture: ComponentFixture<PricingItemFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingItemFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingItemFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
