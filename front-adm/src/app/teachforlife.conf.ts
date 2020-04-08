import { Routes } from '@angular/router';

import { TeachforlifeComponent } from './teachforlife/teachforlife.component';

//Import routing paths
import { tutorRoutingPath,  } from './teachforlife/teachforlife-routing.path';

export const TeachforlifeRoutes: Routes = [
  { path: 'teachforlife',
    component: TeachforlifeComponent,
    children: [
      {path: '',  redirectTo: 'tutor', pathMatch: 'full'},

      { path: 'tutor',
        children: tutorRoutingPath,
        data: {mraLevel: 1, item: 'tutor'}
      },
    ]
  }
];

export const teachforlife_server_root_uri: string = '/api/teachforlife';
