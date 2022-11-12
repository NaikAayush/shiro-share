import { Component, Input, OnInit } from '@angular/core';
import { PricingData } from 'src/app/models/pricingData';

@Component({
  selector: 'app-pricing-item',
  templateUrl: './pricing-item.component.html',
  styleUrls: ['./pricing-item.component.css'],
})
export class PricingItemComponent implements OnInit {
  @Input() pricingData: PricingData | undefined;

  constructor() {}

  ngOnInit(): void {}
}
