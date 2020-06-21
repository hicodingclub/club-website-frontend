import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TeachforlifeComponent } from './teachforlife.component';
import { TeachforlifeCoreRoutes } from '../teachforlife-cust/teachforlife.conf';

@NgModule({
  imports: [RouterModule.forChild(TeachforlifeCoreRoutes)],
  exports: [RouterModule],
  providers: [ ],

})
export class TeachforlifeRoutingCoreModule { }
