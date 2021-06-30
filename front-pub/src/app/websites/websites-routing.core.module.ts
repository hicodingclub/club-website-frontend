import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  WebsitesComponent
} from './websites.component';
import {
  WebsitesCoreRoutes
} from '../websites-cust/websites.conf';
@NgModule({
  imports: [RouterModule.forChild(WebsitesCoreRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class WebsitesRoutingCoreModule {}