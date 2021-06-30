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
  FilesModule,
} from '@hicoder/angular-file';
import {
  FilesRoutingCoreModule
} from './files-routing.core.module';
import {
  FilesComponent
} from './files.component';
import {
  FilesRefSelectDirective
} from './files.component';
// Import components for each schema
import {
  MfileComponent
} from './mfile/mfile.component';
import {
  MfileListComponent
} from './mfile/mfile-list/mfile-list.component';
import {
  MfileListViewComponent
} from './mfile/mfile-list/mfile-list-view.component';
import {
  MfileListCustComponent
} from '../files-cust/base/mfile/mfile-list.cust.component';
import {
  MfileListGeneralComponent
} from './mfile/mfile-list/mfile-list-general.component';
import {
  MfileListSubComponent
} from './mfile/mfile-list/mfile-list-sub.component';
import {
  MfileListViewWidgetListComponent
} from './mfile/mfile-list/mfile-list-view-widget-list.component';
import {
  MfileListViewWidgetGridComponent
} from './mfile/mfile-list/mfile-list-view-widget-grid.component';
import {
  MfileListViewWidgetTableComponent
} from './mfile/mfile-list/mfile-list-view-widget-table.component';
import {
  MfileDetailFieldComponent
} from './mfile/mfile-detail/mfile-detail-field.component';
import {
  MfileEditComponent
} from './mfile/mfile-edit/mfile-edit.component';
import {
  MfileEditCustComponent
} from '../files-cust/base/mfile/mfile-edit.cust.component';
import {
  MfilegroupComponent
} from './mfilegroup/mfilegroup.component';
import {
  MfilegroupListComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list.component';
import {
  MfilegroupListViewComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view.component';
import {
  MfilegroupListCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-list.cust.component';
import {
  MfilegroupListGeneralComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-general.component';
import {
  MfilegroupListSelectComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-select.component';
import {
  MfilegroupListViewWidgetListComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-list.component';
import {
  MfilegroupListViewWidgetGridComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-grid.component';
import {
  MfilegroupListViewWidgetTableComponent
} from './mfilegroup/mfilegroup-list/mfilegroup-list-view-widget-table.component';
import {
  MfilegroupDetailComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail.component';
import {
  MfilegroupDetailCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-detail.cust.component';
import {
  MfilegroupDetailFieldComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-field.component';
import {
  MfilegroupEditComponent
} from './mfilegroup/mfilegroup-edit/mfilegroup-edit.component';
import {
  MfilegroupEditCustComponent
} from '../files-cust/base/mfilegroup/mfilegroup-edit.cust.component';
import {
  MfilegroupDetailPopComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-pop.component';
import {
  MfilegroupDetailSelComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-sel.component';
import {
  MfilegroupDetailSubComponent
} from './mfilegroup/mfilegroup-detail/mfilegroup-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FilesModule,
    FilesRoutingCoreModule,
  ],
  declarations: [
    FilesComponent,
    FilesRefSelectDirective,
    MfileComponent,
    MfileListComponent,
    MfileListViewComponent,
    MfileListCustComponent,
    MfileListGeneralComponent,
    MfileListSubComponent,
    MfileListViewWidgetListComponent,
    MfileListViewWidgetGridComponent,
    MfileListViewWidgetTableComponent,
    MfileDetailFieldComponent,
    MfileEditComponent,
    MfileEditCustComponent,
    MfilegroupComponent,
    MfilegroupListComponent,
    MfilegroupListViewComponent,
    MfilegroupListCustComponent,
    MfilegroupListGeneralComponent,
    MfilegroupListSelectComponent,
    MfilegroupListViewWidgetListComponent,
    MfilegroupListViewWidgetGridComponent,
    MfilegroupListViewWidgetTableComponent,
    MfilegroupDetailCustComponent,
    MfilegroupDetailComponent,
    MfilegroupDetailFieldComponent,
    MfilegroupEditComponent,
    MfilegroupEditCustComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfilegroupDetailSubComponent,
  ],
  exports: [
    FilesComponent,
    MfileListGeneralComponent,
    MfileListSubComponent,
    MfileDetailFieldComponent,
    MfileEditComponent,
    MfilegroupListGeneralComponent,
    MfilegroupListSelectComponent,
    MfilegroupDetailComponent,
    MfilegroupDetailFieldComponent,
    MfilegroupEditComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfilegroupDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM/DD/YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    MfilegroupListSelectComponent,
    MfilegroupDetailPopComponent,
    MfilegroupDetailSelComponent,
    MfilegroupEditComponent,
  ]
})
export class FilesCoreModule {}