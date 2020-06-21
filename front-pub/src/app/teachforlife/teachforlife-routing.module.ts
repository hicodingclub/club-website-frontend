import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeachforlifeRoutes } from '../teachforlife-cust/teachforlife.conf';

@NgModule({
  imports: [RouterModule.forChild(TeachforlifeRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class TeachforlifeRoutingModule { }
