import { Component, OnInit } from '@angular/core';
import { PricingData } from 'src/app/models/pricingData';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css'],
})
export class PricingComponent implements OnInit {
  pricingData: Array<PricingData> = [
    {
      name: 'Free',
      pricePerMonth: 0,
      description: 'Instant file sharing for personal use',
      features: [
        'Unlimited number of files',
        'Max. 100MB per file',
        'Files are only stored for 24 hours',
      ],
    },
    {
      name: 'Standard',
      pricePerMonth: 19,
      description: 'Larger files and longer term storage.',
      features: [
        'Everything from Free',
        'Max. 1GB per file',
        'Files are kept for 7 days (1 week)',
      ],
    },
    {
      name: 'Professional',
      pricePerMonth: 49,
      description: 'For power users and professionals.',
      features: [
        'Everything from Standard',
        'Unlimited file size',
        'Files kept for as long as subscription exists',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
