import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { SummerprogramComponent } from './summerprogram.component';
import { SummerprogramCoreRoutes } from '../summerprogram-cust/summerprogram.conf';

@NgModule({
  imports: [RouterModule.forChild(SummerprogramCoreRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class SummerprogramRoutingCoreModule { }
