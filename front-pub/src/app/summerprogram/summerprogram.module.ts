import { NgModule } from '@angular/core';
import { SummerprogramRoutingModule } from './summerprogram-routing.module';
import { SummerprogramCoreModule } from './summerprogram.core.module';
import { SummerprogramCustModule } from '../summerprogram-cust/summerprogram.cust.module'

@NgModule({
  imports: [
    SummerprogramRoutingModule,
    SummerprogramCoreModule,
    SummerprogramCustModule,
  ],
  declarations: [
  ],
  exports: [
    SummerprogramCoreModule,
    SummerprogramCustModule,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class SummerprogramModule { }
