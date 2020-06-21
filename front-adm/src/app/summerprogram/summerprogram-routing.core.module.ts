import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SummerprogramComponent } from './summerprogram.component';
import { SummerprogramCoreRoutes } from '../summerprogram-cust/summerprogram.conf';

@NgModule({
  imports: [RouterModule.forChild(SummerprogramCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class SummerprogramRoutingCoreModule { }
