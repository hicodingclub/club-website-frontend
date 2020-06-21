import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MddsCoreModule } from '@hicoder/angular-core';

import { SummerprogramRoutingCoreModule } from './summerprogram-routing.core.module';
import { SummerprogramComponent } from './summerprogram.component';

// Import components for each schema
import { SpenrollmentEditComponent } from './spenrollment/spenrollment-edit/spenrollment-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    SummerprogramRoutingCoreModule,
  ],
  declarations: [
    SummerprogramComponent,
    SpenrollmentEditComponent,
  ],
  exports: [
    SummerprogramComponent,
    SpenrollmentEditComponent,
  ],
  providers: [
  ],
  entryComponents: [
    SpenrollmentEditComponent,
  ]
})
export class SummerprogramCoreModule { }
