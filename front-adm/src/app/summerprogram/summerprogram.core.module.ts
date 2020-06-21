import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './summerprogram.directive';
import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { SummerprogramRoutingCoreModule } from './summerprogram-routing.core.module';
import { SummerprogramComponent } from './summerprogram.component';
import { SummerprogramRefSelectDirective } from './summerprogram.component';

// Import components for each schema
import { SpenrollmentListComponent } from './spenrollment/spenrollment-list/spenrollment-list.component';
import { SpenrollmentDetailComponent } from './spenrollment/spenrollment-detail/spenrollment-detail.component';
import { SpenrollmentDetailFieldComponent } from './spenrollment/spenrollment-detail/spenrollment-detail-field.component';
import { SpenrollmentEditComponent } from './spenrollment/spenrollment-edit/spenrollment-edit.component';
import { ConfirmationListComponent } from './confirmation/confirmation-list/confirmation-list.component';
import { ConfirmationDetailComponent } from './confirmation/confirmation-detail/confirmation-detail.component';
import { ConfirmationDetailFieldComponent } from './confirmation/confirmation-detail/confirmation-detail-field.component';
import { ConfirmationEditComponent } from './confirmation/confirmation-edit/confirmation-edit.component';
import { SpenrollmentListSelectComponent } from './spenrollment/spenrollment-list/spenrollment-list-select.component';
import { SpenrollmentDetailPopComponent } from './spenrollment/spenrollment-detail/spenrollment-detail-pop.component';
import { SpenrollmentDetailSelComponent } from './spenrollment/spenrollment-detail/spenrollment-detail-sel.component';
import { ConfirmationListSubComponent } from './confirmation/confirmation-list/confirmation-list-sub.component';
import { ConfirmationDetailSubComponent } from './confirmation/confirmation-detail/confirmation-detail-sub.component';

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
  providers: [
    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
    SpenrollmentListSelectComponent,
    SpenrollmentDetailPopComponent,
    SpenrollmentDetailSelComponent,
    SpenrollmentEditComponent,
    ConfirmationEditComponent,
  ]
})
export class SummerprogramCoreModule { }
