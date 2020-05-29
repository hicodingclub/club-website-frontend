import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { TeachforlifeComponent } from './teachforlife.component';
import { TeachforlifeCoreRoutes } from '../teachforlife-cust/teachforlife.conf';

@NgModule({
  imports: [RouterModule.forChild(TeachforlifeCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class TeachforlifeRoutingCoreModule { }
