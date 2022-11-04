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
      description: 'For small files',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Pariatur quod similique',
      ],
    },
    {
      name: 'Standard',
      pricePerMonth: 19,
      description: 'For larger files and longer time',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Pariatur quod similique',
      ],
    },
    {
      name: 'Professional',
      pricePerMonth: 49,
      description: 'For professionals and teams',
      features: [
        'Pariatur quod similique',
        'Sapiente libero doloribus modi nostrum',
        'Pariatur quod similique',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
