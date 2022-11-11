import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeaturesComponent } from './components/features/features.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingItemComponent } from './components/pricing/pricing-item/pricing-item.component';
import { PricingItemFeatureComponent } from './components/pricing/pricing-item/pricing-item-feature/pricing-item-feature.component';
import { FileDropzoneComponent } from './components/file-dropzone/file-dropzone.component';
import { FileDropzoneDirective } from './components/file-dropzone/directive/file-dropzone.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FeaturesComponent,
    PricingComponent,
    PricingItemComponent,
    PricingItemFeatureComponent,
    FileDropzoneComponent,
    FileDropzoneDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
