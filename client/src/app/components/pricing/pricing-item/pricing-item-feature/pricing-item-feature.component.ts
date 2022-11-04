import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-item-feature',
  templateUrl: './pricing-item-feature.component.html',
  styleUrls: ['./pricing-item-feature.component.css'],
})
export class PricingItemFeatureComponent implements OnInit {
  @Input() feature: string = '';

  constructor() {}

  ngOnInit(): void {}
}
