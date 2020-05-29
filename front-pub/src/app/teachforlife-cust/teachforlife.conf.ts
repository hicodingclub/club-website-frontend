import { Routes } from '@angular/router';

import { TeachforlifeComponent } from '../teachforlife/teachforlife.component';

//Import routing paths
import { 
  tutorRoutingCorePath, 
  enrollmentRoutingCorePath,  
} from '../teachforlife/teachforlife-routing.core.path';

export const TeachforlifeCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'teachforlife', loadChildren: () => import('./teachforlife/teachforlife.module').then(m => m.TeachforlifeModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'teachforlife',

    component: TeachforlifeComponent,
    children: [
      {path: '',  redirectTo: 'tutor', pathMatch: 'full'},

      { path: 'tutor',
        children: tutorRoutingCorePath,
        data: {mraLevel: 1, item: 'tutor'}
      },
      { path: 'enrollment',
        children: enrollmentRoutingCorePath,
        data: {mraLevel: 1, item: 'enrollment'}
      },
    ]
  },
];

import { TeachforlifeRoutingCustPath } from './teachforlife-routing.cust.path';

export const TeachforlifeRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'teachforlife', loadChildren: () => import('./teachforlife/teachforlife.module').then(m => m.TeachforlifeModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'teachforlife/cust',

    children: TeachforlifeRoutingCustPath,
  },
];

export const teachforlife_server_root_uri: string = '/api/teachforlife';
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri May 29 2020 12:37:20 GMT-0700 (Pacific Daylight Time)

import { Routes } from '@angular/router';

import { TeachforlifeComponent } from '../teachforlife/teachforlife.component';

//Import routing paths
import { 
  tutorRoutingCorePath, 
  enrollmentRoutingCorePath,  
} from '../teachforlife/teachforlife-routing.core.path';

export const TeachforlifeCoreRoutes: Routes = [
  { 
    // Lazy Load: and add to app routing: 
    //     { path: 'teachforlife', loadChildren: () => import('./teachforlife/teachforlife.module').then(m => m.TeachforlifeModule) },
    path: '',
    // non lazy load config. Include module in app module.
    // path: 'teachforlife',

    component: TeachforlifeComponent,
    children: [
      {path: '',  redirectTo: 'tutor', pathMatch: 'full'},

      { path: 'tutor',
        children: tutorRoutingCorePath,
        data: {mraLevel: 1, item: 'tutor'}
      },
      { path: 'enrollment',
        children: enrollmentRoutingCorePath,
        data: {mraLevel: 1, item: 'enrollment'}
      },
    ]
  },
];

import { TeachforlifeRoutingCustPath } from './teachforlife-routing.cust.path';

export const TeachforlifeRoutes: Routes = [
  {
    // Lazy Load: and add to app routing: 
    //     { path: 'teachforlife', loadChildren: () => import('./teachforlife/teachforlife.module').then(m => m.TeachforlifeModule) },
    path: 'cust',
    // non lazy load config. Include module in app module.
    // path: 'teachforlife/cust',

    children: TeachforlifeRoutingCustPath,
  },
];

export const teachforlife_server_root_uri: string = '/api/teachforlife';
**** End of recent updates.<<<*/
