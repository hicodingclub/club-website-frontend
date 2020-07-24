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
  NgbModule,
  NgbDateParserFormatter
} from '@ng-bootstrap/ng-bootstrap';
import {
  MraNgbDateFormatterService
} from './summerprogram.directive';
import {
  ActionEmailModule
} from '@hicoder/angular-action-email';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
import {
  SummerprogramRoutingCoreModule
} from './summerprogram-routing.core.module';
import {
  SummerprogramComponent
} from './summerprogram.component';
import {
  SummerprogramRefSelectDirective
} from './summerprogram.component';
// Import components for each schema
import {
  SpenrollmentComponent
} from './spenrollment/spenrollment.component';
import {
  SpenrollmentListComponent
} from './spenrollment/spenrollment-list/spenrollment-list.component';
import {
  SpenrollmentListCustComponent
} from '../summerprogram-cust/base/spenrollment/spenrollment-list.cust.component';
import {
  SpenrollmentDetailComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail.component';
import {
  SpenrollmentDetailCustComponent
} from '../summerprogram-cust/base/spenrollment/spenrollment-detail.cust.component';
import {
  SpenrollmentDetailFieldComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail-field.component';
import {
  SpenrollmentEditComponent
} from './spenrollment/spenrollment-edit/spenrollment-edit.component';
import {
  SpenrollmentEditCustComponent
} from '../summerprogram-cust/base/spenrollment/spenrollment-edit.cust.component';
import {
  ConfirmationComponent
} from './confirmation/confirmation.component';
import {
  ConfirmationListComponent
} from './confirmation/confirmation-list/confirmation-list.component';
import {
  ConfirmationListCustComponent
} from '../summerprogram-cust/base/confirmation/confirmation-list.cust.component';
import {
  ConfirmationDetailComponent
} from './confirmation/confirmation-detail/confirmation-detail.component';
import {
  ConfirmationDetailCustComponent
} from '../summerprogram-cust/base/confirmation/confirmation-detail.cust.component';
import {
  ConfirmationDetailFieldComponent
} from './confirmation/confirmation-detail/confirmation-detail-field.component';
import {
  ConfirmationEditComponent
} from './confirmation/confirmation-edit/confirmation-edit.component';
import {
  ConfirmationEditCustComponent
} from '../summerprogram-cust/base/confirmation/confirmation-edit.cust.component';
import {
  SpenrollmentListSelectComponent
} from './spenrollment/spenrollment-list/spenrollment-list-select.component';
import {
  SpenrollmentDetailPopComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail-pop.component';
import {
  SpenrollmentDetailSelComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail-sel.component';
import {
  ConfirmationListSubComponent
} from './confirmation/confirmation-list/confirmation-list-sub.component';
import {
  ConfirmationDetailSubComponent
} from './confirmation/confirmation-detail/confirmation-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    ActionEmailModule,
    SummerprogramRoutingCoreModule,
  ],
  declarations: [
    SummerprogramComponent,
    SummerprogramRefSelectDirective,
    SpenrollmentComponent,
    SpenrollmentListComponent,
    SpenrollmentListCustComponent,
    SpenrollmentDetailCustComponent,
    SpenrollmentDetailComponent,
    SpenrollmentDetailFieldComponent,
    SpenrollmentEditComponent,
    SpenrollmentEditCustComponent,
    ConfirmationComponent,
    ConfirmationListComponent,
    ConfirmationListCustComponent,
    ConfirmationDetailCustComponent,
    ConfirmationDetailComponent,
    ConfirmationDetailFieldComponent,
    ConfirmationEditComponent,
    ConfirmationEditCustComponent,
    SpenrollmentListSelectComponent,
    SpenrollmentDetailPopComponent,
    SpenrollmentDetailSelComponent,
    ConfirmationListSubComponent,
    ConfirmationDetailSubComponent,
  ],
  exports: [
    SummerprogramComponent,
    SpenrollmentListComponent,
    SpenrollmentDetailComponent,
    SpenrollmentDetailFieldComponent,
    SpenrollmentEditComponent,
    ConfirmationListComponent,
    ConfirmationDetailComponent,
    ConfirmationDetailFieldComponent,
    ConfirmationEditComponent,
    SpenrollmentListSelectComponent,
    SpenrollmentDetailPopComponent,
    SpenrollmentDetailSelComponent,
    ConfirmationListSubComponent,
    ConfirmationDetailSubComponent,
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    SpenrollmentListSelectComponent,
    SpenrollmentDetailPopComponent,
    SpenrollmentDetailSelComponent,
    SpenrollmentEditComponent,
    ConfirmationEditComponent,
  ]
})
export class SummerprogramCoreModule {}