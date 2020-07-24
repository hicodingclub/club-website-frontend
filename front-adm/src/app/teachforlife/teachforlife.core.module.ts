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
} from './teachforlife.directive';
import {
  DirectiveTeachforlifeArrayRequired
} from './teachforlife.directive';
import {
  FileUploadModule
} from '@hicoder/angular-file';
import {
  ActionEmailModule
} from '@hicoder/angular-action-email';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
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
  TutorListCustComponent
} from '../teachforlife-cust/base/tutor/tutor-list.cust.component';
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
  EnrollmentListCustComponent
} from '../teachforlife-cust/base/enrollment/enrollment-list.cust.component';
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
  TutorListSelectComponent
} from './tutor/tutor-list/tutor-list-select.component';
import {
  TutorDetailPopComponent
} from './tutor/tutor-detail/tutor-detail-pop.component';
import {
  TutorDetailSelComponent
} from './tutor/tutor-detail/tutor-detail-sel.component';
import {
  EnrollmentListSubComponent
} from './enrollment/enrollment-list/enrollment-list-sub.component';
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
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,
    TeachforlifeRoutingCoreModule,
  ],
  declarations: [
    TeachforlifeComponent,
    TeachforlifeRefSelectDirective,
    TutorComponent,
    TutorListComponent,
    TutorListCustComponent,
    TutorDetailCustComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    TutorEditComponent,
    TutorEditCustComponent,
    EnrollmentComponent,
    EnrollmentListComponent,
    EnrollmentListCustComponent,
    EnrollmentDetailCustComponent,
    EnrollmentDetailComponent,
    EnrollmentDetailFieldComponent,
    EnrollmentEditComponent,
    EnrollmentEditCustComponent,
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    EnrollmentListSubComponent,
    EnrollmentDetailSubComponent,
    TeachforlifeTutorDirectiveEmail,
    TeachforlifeTutorDirectivePhoneNumber,
    DirectiveTeachforlifeArrayRequired,
  ],
  exports: [
    TeachforlifeComponent,
    TutorListComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    TutorEditComponent,
    EnrollmentListComponent,
    EnrollmentDetailComponent,
    EnrollmentDetailFieldComponent,
    EnrollmentEditComponent,
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    EnrollmentListSubComponent,
    EnrollmentDetailSubComponent,
    TeachforlifeTutorDirectiveEmail,
    TeachforlifeTutorDirectivePhoneNumber,
    DirectiveTeachforlifeArrayRequired,
  ],
  providers: [{
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