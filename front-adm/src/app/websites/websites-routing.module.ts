import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  WebsitesRoutes
} from '../websites-cust/websites.conf';
@NgModule({
  imports: [RouterModule.forChild(WebsitesRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class WebsitesRoutingModule {}