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
  EnrollmentComponent
} from './enrollment/enrollment.component';
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
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
    EnrollmentComponent,
    EnrollmentEditComponent,
    EnrollmentEditCustComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    TutorDetailSubComponent,
  ],
  exports: [
    TeachforlifeComponent,
    TutorListGeneralComponent,
    TutorListSelectComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    EnrollmentEditComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    TutorDetailSubComponent,
  ],
  providers: [],
  entryComponents: [
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    EnrollmentEditComponent,
  ]
})
export class TeachforlifeCoreModule {}