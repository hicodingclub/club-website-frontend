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
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import {
  MDDS_NGB_DATE_FORMAT,
  MraNgbDateFormatterService,
} from '@hicoder/angular-core';
import {
  ActionEmailModule,
} from '@hicoder/angular-action-email';
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
  SpenrollmentListViewComponent
} from './spenrollment/spenrollment-list/spenrollment-list-view.component';
import {
  SpenrollmentListCustComponent
} from '../summerprogram-cust/base/spenrollment/spenrollment-list.cust.component';
import {
  SpenrollmentListGeneralComponent
} from './spenrollment/spenrollment-list/spenrollment-list-general.component';
import {
  SpenrollmentListSelectComponent
} from './spenrollment/spenrollment-list/spenrollment-list-select.component';
import {
  SpenrollmentListViewWidgetListComponent
} from './spenrollment/spenrollment-list/spenrollment-list-view-widget-list.component';
import {
  SpenrollmentListViewWidgetGridComponent
} from './spenrollment/spenrollment-list/spenrollment-list-view-widget-grid.component';
import {
  SpenrollmentListViewWidgetTableComponent
} from './spenrollment/spenrollment-list/spenrollment-list-view-widget-table.component';
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
  ConfirmationListViewComponent
} from './confirmation/confirmation-list/confirmation-list-view.component';
import {
  ConfirmationListCustComponent
} from '../summerprogram-cust/base/confirmation/confirmation-list.cust.component';
import {
  ConfirmationListGeneralComponent
} from './confirmation/confirmation-list/confirmation-list-general.component';
import {
  ConfirmationListSubComponent
} from './confirmation/confirmation-list/confirmation-list-sub.component';
import {
  ConfirmationListViewWidgetListComponent
} from './confirmation/confirmation-list/confirmation-list-view-widget-list.component';
import {
  ConfirmationListViewWidgetGridComponent
} from './confirmation/confirmation-list/confirmation-list-view-widget-grid.component';
import {
  ConfirmationListViewWidgetTableComponent
} from './confirmation/confirmation-list/confirmation-list-view-widget-table.component';
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
  SpenrollmentDetailPopComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail-pop.component';
import {
  SpenrollmentDetailSelComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail-sel.component';
import {
  SpenrollmentDetailSubComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ActionEmailModule,
    SummerprogramRoutingCoreModule,
  ],
  declarations: [
    SummerprogramComponent,
    SummerprogramRefSelectDirective,
    SpenrollmentComponent,
    SpenrollmentListComponent,
    SpenrollmentListViewComponent,
    SpenrollmentListCustComponent,
    SpenrollmentListGeneralComponent,
    SpenrollmentListSelectComponent,
    SpenrollmentListViewWidgetListComponent,
    SpenrollmentListViewWidgetGridComponent,
    SpenrollmentListViewWidgetTableComponent,
    SpenrollmentDetailCustComponent,
    SpenrollmentDetailComponent,
    SpenrollmentDetailFieldComponent,
    SpenrollmentEditComponent,
    SpenrollmentEditCustComponent,
    ConfirmationComponent,
    ConfirmationListComponent,
    ConfirmationListViewComponent,
    ConfirmationListCustComponent,
    ConfirmationListGeneralComponent,
    ConfirmationListSubComponent,
    ConfirmationListViewWidgetListComponent,
    ConfirmationListViewWidgetGridComponent,
    ConfirmationListViewWidgetTableComponent,
    ConfirmationDetailCustComponent,
    ConfirmationDetailComponent,
    ConfirmationDetailFieldComponent,
    ConfirmationEditComponent,
    ConfirmationEditCustComponent,
    SpenrollmentDetailPopComponent,
    SpenrollmentDetailSelComponent,
    SpenrollmentDetailSubComponent,
  ],
  exports: [
    SummerprogramComponent,
    SpenrollmentListGeneralComponent,
    SpenrollmentListSelectComponent,
    SpenrollmentDetailComponent,
    SpenrollmentDetailFieldComponent,
    SpenrollmentEditComponent,
    ConfirmationListGeneralComponent,
    ConfirmationListSubComponent,
    ConfirmationDetailComponent,
    ConfirmationDetailFieldComponent,
    ConfirmationEditComponent,
    SpenrollmentDetailPopComponent,
    SpenrollmentDetailSelComponent,
    SpenrollmentDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
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