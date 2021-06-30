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
  MddsCoreModule,
  MDDS_NGB_DATE_FORMAT,
  MraNgbDateFormatterService,
} from '@hicoder/angular-core';
import {
  NgbModule,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import {
  FilesModule,
} from '@hicoder/angular-file';
import {
  ActionEmailModule,
} from '@hicoder/angular-action-email';
import {
  TeachforlifeRoutingCoreModule
} from './teachforlife-routing.core.module';
import {
  TeachforlifeComponent
} from './teachforlife.component';
import {
  TeachforlifeRefSelectDirective
} from './teachforlife.component';
// Import components for each schema
import {
  TutorComponent
} from './tutor/tutor.component';
import {
  TutorListComponent
} from './tutor/tutor-list/tutor-list.component';
import {
  TutorListViewComponent
} from './tutor/tutor-list/tutor-list-view.component';
import {
  TutorListCustComponent
} from '../teachforlife-cust/base/tutor/tutor-list.cust.component';
import {
  TutorListGeneralComponent
} from './tutor/tutor-list/tutor-list-general.component';
import {
  TutorListSelectComponent
} from './tutor/tutor-list/tutor-list-select.component';
import {
  TutorListViewWidgetListComponent
} from './tutor/tutor-list/tutor-list-view-widget-list.component';
import {
  TutorListViewWidgetGridComponent
} from './tutor/tutor-list/tutor-list-view-widget-grid.component';
import {
  TutorListViewWidgetTableComponent
} from './tutor/tutor-list/tutor-list-view-widget-table.component';
import {
  TutorDetailComponent
} from './tutor/tutor-detail/tutor-detail.component';
import {
  TutorDetailCustComponent
} from '../teachforlife-cust/base/tutor/tutor-detail.cust.component';
import {
  TutorDetailFieldComponent
} from './tutor/tutor-detail/tutor-detail-field.component';
import {
  TutorEditComponent
} from './tutor/tutor-edit/tutor-edit.component';
import {
  TutorEditCustComponent
} from '../teachforlife-cust/base/tutor/tutor-edit.cust.component';
import {
  EnrollmentComponent
} from './enrollment/enrollment.component';
import {
  EnrollmentListComponent
} from './enrollment/enrollment-list/enrollment-list.component';
import {
  EnrollmentListViewComponent
} from './enrollment/enrollment-list/enrollment-list-view.component';
import {
  EnrollmentListCustComponent
} from '../teachforlife-cust/base/enrollment/enrollment-list.cust.component';
import {
  EnrollmentListGeneralComponent
} from './enrollment/enrollment-list/enrollment-list-general.component';
import {
  EnrollmentListSubComponent
} from './enrollment/enrollment-list/enrollment-list-sub.component';
import {
  EnrollmentListViewWidgetListComponent
} from './enrollment/enrollment-list/enrollment-list-view-widget-list.component';
import {
  EnrollmentListViewWidgetGridComponent
} from './enrollment/enrollment-list/enrollment-list-view-widget-grid.component';
import {
  EnrollmentListViewWidgetTableComponent
} from './enrollment/enrollment-list/enrollment-list-view-widget-table.component';
import {
  EnrollmentDetailComponent
} from './enrollment/enrollment-detail/enrollment-detail.component';
import {
  EnrollmentDetailCustComponent
} from '../teachforlife-cust/base/enrollment/enrollment-detail.cust.component';
import {
  EnrollmentDetailFieldComponent
} from './enrollment/enrollment-detail/enrollment-detail-field.component';
import {
  EnrollmentEditComponent
} from './enrollment/enrollment-edit/enrollment-edit.component';
import {
  EnrollmentEditCustComponent
} from '../teachforlife-cust/base/enrollment/enrollment-edit.cust.component';
import {
  TutorDetailPopComponent
} from './tutor/tutor-detail/tutor-detail-pop.component';
import {
  TutorDetailSelComponent
} from './tutor/tutor-detail/tutor-detail-sel.component';
import {
  TutorDetailSubComponent
} from './tutor/tutor-detail/tutor-detail-sub.component';
import {
  EnrollmentDetailSubComponent
} from './enrollment/enrollment-detail/enrollment-detail-sub.component';
import {
  TeachforlifeTutorDirectiveEmail
} from './tutor/tutor-edit/tutor-edit.component';
import {
  TeachforlifeTutorDirectivePhoneNumber
} from './tutor/tutor-edit/tutor-edit.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    NgbModule,
    FilesModule,
    ActionEmailModule,
    TeachforlifeRoutingCoreModule,
  ],
  declarations: [
    TeachforlifeComponent,
    TeachforlifeRefSelectDirective,
    TutorComponent,
    TutorListComponent,
    TutorListViewComponent,
    TutorListCustComponent,
    TutorListGeneralComponent,
    TutorListSelectComponent,
    TutorListViewWidgetListComponent,
    TutorListViewWidgetGridComponent,
    TutorListViewWidgetTableComponent,
    TutorDetailCustComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    TutorEditComponent,
    TutorEditCustComponent,
    EnrollmentComponent,
    EnrollmentListComponent,
    EnrollmentListViewComponent,
    EnrollmentListCustComponent,
    EnrollmentListGeneralComponent,
    EnrollmentListSubComponent,
    EnrollmentListViewWidgetListComponent,
    EnrollmentListViewWidgetGridComponent,
    EnrollmentListViewWidgetTableComponent,
    EnrollmentDetailCustComponent,
    EnrollmentDetailComponent,
    EnrollmentDetailFieldComponent,
    EnrollmentEditComponent,
    EnrollmentEditCustComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    TutorDetailSubComponent,
    EnrollmentDetailSubComponent,
    TeachforlifeTutorDirectiveEmail,
    TeachforlifeTutorDirectivePhoneNumber,
  ],
  exports: [
    TeachforlifeComponent,
    TutorListGeneralComponent,
    TutorListSelectComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    TutorEditComponent,
    EnrollmentListGeneralComponent,
    EnrollmentListSubComponent,
    EnrollmentDetailComponent,
    EnrollmentDetailFieldComponent,
    EnrollmentEditComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    TutorDetailSubComponent,
    EnrollmentDetailSubComponent,
    TeachforlifeTutorDirectiveEmail,
    TeachforlifeTutorDirectivePhoneNumber,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    TutorEditComponent,
    EnrollmentEditComponent,
  ]
})
export class TeachforlifeCoreModule {}