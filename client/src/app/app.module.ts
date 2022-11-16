import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
import { AuthComponent } from './components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

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
    AuthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
