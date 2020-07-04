import { Routes } from '@angular/router';

import { SummerprogramComponent } from '../summerprogram/summerprogram.component';

//Import routing paths
import { 
  spenrollmentRoutingCorePath,
  confirmationRoutingCorePath,
} from '../summerprogram/summerprogram-routing.core.path';

export const SummerprogramCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'summerprogram', loadChildren: () => import('./summerprogram/summerprogram.module').then(m => m.SummerprogramModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'summerprogram',

    component: SummerprogramComponent,
    children: [
      {path: '',  redirectTo: 'spenrollment', pathMatch: 'full'},

      { path: 'spenrollment',
        children: spenrollmentRoutingCorePath,
        data: {mraLevel: 1, item: 'spenrollment'}
      },
      { path: 'confirmation',
        children: confirmationRoutingCorePath,
        data: {mraLevel: 1, item: 'confirmation'}
      },
    ]
  },
];

import { SummerprogramRoutingCustPath } from './summerprogram-routing.cust.path';

export const SummerprogramRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'summerprogram', loadChildren: () => import('./summerprogram/summerprogram.module').then(m => m.SummerprogramModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'summerprogram/cust',

    children: SummerprogramRoutingCustPath,
  },
];

export const summerprogram_server_root_uri: string = '/api/summerprogram';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jul 03 2020 17:37:31 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { SummerprogramComponent } from '../summerprogram/summerprogram.component';

//Import routing paths
import { 
  spenrollmentRoutingCorePath,
} from '../summerprogram/summerprogram-routing.core.path';

export const SummerprogramCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing:
    //     { path: 'summerprogram', loadChildren: () => import('./summerprogram/summerprogram.module').then(m => m.SummerprogramModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'summerprogram',

    component: SummerprogramComponent,
    children: [
      {path: '',  redirectTo: 'spenrollment', pathMatch: 'full'},

      { path: 'spenrollment',
        children: spenrollmentRoutingCorePath,
        data: {mraLevel: 1, item: 'spenrollment'}
      },
      { path: 'confirmation',
        children: confirmationRoutingCorePath,
        data: {mraLevel: 1, item: 'confirmation'}
      },
    ]
  },
];

import { SummerprogramRoutingCustPath } from './summerprogram-routing.cust.path';

export const SummerprogramRoutes: Routes = [
  {
    // Lazy Load: and add to app routing:
    //     { path: 'summerprogram', loadChildren: () => import('./summerprogram/summerprogram.module').then(m => m.SummerprogramModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'summerprogram/cust',

    children: SummerprogramRoutingCustPath,
  },
];**** End of recent updates.<<<*/
