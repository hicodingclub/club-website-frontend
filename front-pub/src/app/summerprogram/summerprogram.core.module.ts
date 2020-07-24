import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FormsModule
} from '@angular/forms';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
import {
  SummerprogramRoutingCoreModule
} from './summerprogram-routing.core.module';
import {
  SummerprogramComponent
} from './summerprogram.component';
// Import components for each schema
import {
  SpenrollmentComponent
} from './spenrollment/spenrollment.component';
import {
  SpenrollmentEditComponent
} from './spenrollment/spenrollment-edit/spenrollment-edit.component';
import {
  SpenrollmentEditCustComponent
} from '../summerprogram-cust/base/spenrollment/spenrollment-edit.cust.component';
import {
  ConfirmationComponent
} from './confirmation/confirmation.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    SummerprogramRoutingCoreModule,
  ],
  declarations: [
    SummerprogramComponent,
    SpenrollmentComponent,
    SpenrollmentEditComponent,
    SpenrollmentEditCustComponent,
    ConfirmationComponent,
  ],
  exports: [
    SummerprogramComponent,
    SpenrollmentEditComponent,
  ],
  providers: [],
  entryComponents: [
    SpenrollmentEditComponent,
  ]
})
export class SummerprogramCoreModule {}