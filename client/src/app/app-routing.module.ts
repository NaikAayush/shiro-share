import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FeaturesComponent } from './components/features/features.component';
import { FilesComponent } from './components/files/files.component';
import { MyFilesComponent } from './components/my-files/my-files.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { EmailComponent } from './components/share-files/email/email.component';
import { LinkComponent } from './components/share-files/link/link.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // pathMatch: 'full',
    children: [
      { path: '', redirectTo: 'link', pathMatch: 'full' },
      { path: 'email', component: EmailComponent },
      { path: 'link', component: LinkComponent },
    ],
  },
  { path: 'features', component: FeaturesComponent, pathMatch: 'full' },
  { path: 'pricing', component: PricingComponent, pathMatch: 'full' },
  { path: 'my-files', component: MyFilesComponent, pathMatch: 'full' },
  { path: 'files/:cid', component: FilesComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
