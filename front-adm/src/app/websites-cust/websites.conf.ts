import {
  Routes
} from '@angular/router';
import {
  WebsitesComponent
} from '../websites/websites.component';
//Import routing paths
import {
  siteRoutingCorePath,
} from '../websites/websites-routing.core.path';
export const WebsitesCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'websites', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'websites',
  component: WebsitesComponent,
  children: [{
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  }, {
    path: 'site',
    children: siteRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'site'
    }
  }, ]
}, ];
import {
  WebsitesRoutingCustPath
} from './websites-routing.cust.path';
export const WebsitesRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'websites', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'websites/cust',
  children: WebsitesRoutingCustPath,
}, ];/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Jul 01 2021 12:32:35 GMT-0700 (Pacific Daylight Time)

import {
  Routes
} from '@angular/router';
import {
  WebsitesComponent
} from '../websites/websites.component';
//Import routing paths
import {
  siteRoutingCorePath,
} from '../websites/websites-routing.core.path';
export const WebsitesCoreRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'websites', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
  path: '',
  // non lazy load config. Include module in app module.
  // path: 'websites',
  component: WebsitesComponent,
  children: [{
    path: '',
    redirectTo: 'site',
    pathMatch: 'full'
  }, {
    path: 'site',
    children: siteRoutingCorePath,
    data: {
      mraLevel: 1,
      item: 'site'
    }
  }, ]
}, ];
import {
  WebsitesRoutingCustPath
} from './websites-routing.cust.path';
export const WebsitesRoutes: Routes = [{
  // Lazy Load: and add to app routing:
  //     { path: 'websites', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
  path: 'cust',
  // non lazy load config. Include module in app module.
  // path: 'websites/cust',
  children: WebsitesRoutingCustPath,
}, ];**** End of recent updates.<<<*/
