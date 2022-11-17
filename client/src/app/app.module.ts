import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';

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
import { ShareFilesComponent } from './components/share-files/share-files.component';
import { EmailComponent } from './components/share-files/email/email.component';
import { LinkComponent } from './components/share-files/link/link.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from './components/toast/toast.component';
import { FilesComponent } from './components/files/files.component';

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
    ShareFilesComponent,
    EmailComponent,
    LinkComponent,
    ToastComponent,
    FilesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClipboardModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
