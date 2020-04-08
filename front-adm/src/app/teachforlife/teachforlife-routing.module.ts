import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { TeachforlifeComponent } from './teachforlife.component';
import { TeachforlifeRoutes } from '../teachforlife.conf';

@NgModule({
  imports: [RouterModule.forChild(TeachforlifeRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class TeachforlifeRoutingModule { }
