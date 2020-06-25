import { Routes } from '@angular/router';

import { PublicinfoComponent } from '../publicinfo/publicinfo.component';

//Import routing paths
import { 
  eventRoutingCorePath, 
  articleRoutingCorePath, 
  faqRoutingCorePath, 
  generalinfoRoutingCorePath, 
  keynoteRoutingCorePath, 
  pageRoutingCorePath, 
  alertRoutingCorePath,  
} from '../publicinfo/publicinfo-routing.core.path';

export const PublicinfoCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'publicinfo',

    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: 'event',
        children: eventRoutingCorePath,
        data: {mraLevel: 1, item: 'event'}
      },
      { path: 'article',
        children: articleRoutingCorePath,
        data: {mraLevel: 1, item: 'article'}
      },
      { path: 'faq',
        children: faqRoutingCorePath,
        data: {mraLevel: 1, item: 'faq'}
      },
      { path: 'generalinfo',
        children: generalinfoRoutingCorePath,
        data: {mraLevel: 1, item: 'generalinfo'}
      },
      { path: 'keynote',
        children: keynoteRoutingCorePath,
        data: {mraLevel: 1, item: 'keynote'}
      },
      { path: 'page',
        children: pageRoutingCorePath,
        data: {mraLevel: 1, item: 'page'}
      },
      { path: 'alert',
        children: alertRoutingCorePath,
        data: {mraLevel: 1, item: 'alert'}
      },
    ]
  },
];

import { PublicinfoRoutingCustPath } from './publicinfo-routing.cust.path';

export const PublicinfoRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'publicinfo/cust',

    children: PublicinfoRoutingCustPath,
  },
];

export const publicinfo_server_root_uri: string = '/api/publicinfo';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Jun 25 2020 13:37:43 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { PublicinfoComponent } from '../publicinfo/publicinfo.component';

//Import routing paths
import { 
  eventRoutingCorePath,
  articleRoutingCorePath,
  faqRoutingCorePath,
  generalinfoRoutingCorePath,
  keynoteRoutingCorePath,
  pageRoutingCorePath,
  alertRoutingCorePath,
} from '../publicinfo/publicinfo-routing.core.path';

export const PublicinfoCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'publicinfo',

    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'event', pathMatch: 'full'},

      { path: 'event',
        children: eventRoutingCorePath,
        data: {mraLevel: 1, item: 'event'}
      },
      { path: 'article',
        children: articleRoutingCorePath,
        data: {mraLevel: 1, item: 'article'}
      },
      { path: 'faq',
        children: faqRoutingCorePath,
        data: {mraLevel: 1, item: 'faq'}
      },
      { path: 'generalinfo',
        children: generalinfoRoutingCorePath,
        data: {mraLevel: 1, item: 'generalinfo'}
      },
      { path: 'keynote',
        children: keynoteRoutingCorePath,
        data: {mraLevel: 1, item: 'keynote'}
      },
      { path: 'page',
        children: pageRoutingCorePath,
        data: {mraLevel: 1, item: 'page'}
      },
      { path: 'alert',
        children: alertRoutingCorePath,
        data: {mraLevel: 1, item: 'alert'}
      },
    ]
  },
];

import { PublicinfoRoutingCustPath } from './publicinfo-routing.cust.path';

export const PublicinfoRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'publicinfo/cust',

    children: PublicinfoRoutingCustPath,
  },
];**** End of recent updates.<<<*/
