import {
  NgModule
} from '@angular/core';
import {
  WebsitesRoutingModule
} from './websites-routing.module';
import {
  WebsitesCoreModule
} from './websites.core.module';
import {
  WebsitesCustModule
} from '../websites-cust/websites.cust.module'
@NgModule({
  imports: [
    WebsitesRoutingModule,
    WebsitesCoreModule,
    WebsitesCustModule,
  ],
  declarations: [],
  exports: [
    WebsitesCoreModule,
    WebsitesCustModule,
  ],
  providers: [],
  entryComponents: []
})
export class WebsitesModule {}