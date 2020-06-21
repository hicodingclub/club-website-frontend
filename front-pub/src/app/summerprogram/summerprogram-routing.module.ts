import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';

import { MddsRouteReuseStrategy } from '@hicoder/angular-core';

import { SummerprogramRoutes } from '../summerprogram-cust/summerprogram.conf';

@NgModule({
  imports: [RouterModule.forChild(SummerprogramRoutes)],
  exports: [RouterModule],
  providers: [ // only use these providers in component scope
    { provide: RouteReuseStrategy, useClass: MddsRouteReuseStrategy },
  ],

})
export class SummerprogramRoutingModule { }
