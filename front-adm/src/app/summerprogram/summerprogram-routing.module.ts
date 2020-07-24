import {
  NgModule
} from '@angular/core';
import {
  RouterModule
} from '@angular/router';
import {
  SummerprogramRoutes
} from '../summerprogram-cust/summerprogram.conf';
@NgModule({
  imports: [RouterModule.forChild(SummerprogramRoutes)],
  exports: [RouterModule],
  providers: [],
})
export class SummerprogramRoutingModule {}