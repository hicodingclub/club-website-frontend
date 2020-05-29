import { NgModule } from '@angular/core';
import { TeachforlifeRoutingModule } from './teachforlife-routing.module';
import { TeachforlifeCoreModule } from './teachforlife.core.module';
import { TeachforlifeCustModule } from '../teachforlife-cust/teachforlife.cust.module'

@NgModule({
  imports: [
    TeachforlifeRoutingModule,
    TeachforlifeCoreModule,
    TeachforlifeCustModule,
  ],
  declarations: [
  ],
  exports: [
    TeachforlifeCoreModule,
    TeachforlifeCustModule,
  ],
  providers: [
  ],
  entryComponents: [
  ]
})
export class TeachforlifeModule { }
