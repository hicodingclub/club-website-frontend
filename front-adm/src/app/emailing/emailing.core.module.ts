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
  MddsRichtextEditorModule,
} from '@hicoder/angular-richtext';
import {
  EmailingRoutingCoreModule
} from './emailing-routing.core.module';
import {
  EmailingComponent
} from './emailing.component';
// Import components for each schema
import {
  EmailtemplateComponent
} from './emailtemplate/emailtemplate.component';
import {
  EmailtemplateListComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list.component';
import {
  EmailtemplateListViewComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list-view.component';
import {
  EmailtemplateListCustComponent
} from '../emailing-cust/base/emailtemplate/emailtemplate-list.cust.component';
import {
  EmailtemplateListGeneralComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list-general.component';
import {
  EmailtemplateListViewWidgetListComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list-view-widget-list.component';
import {
  EmailtemplateListViewWidgetGridComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list-view-widget-grid.component';
import {
  EmailtemplateListViewWidgetTableComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list-view-widget-table.component';
import {
  EmailtemplateDetailComponent
} from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';
import {
  EmailtemplateDetailCustComponent
} from '../emailing-cust/base/emailtemplate/emailtemplate-detail.cust.component';
import {
  EmailtemplateDetailFieldComponent
} from './emailtemplate/emailtemplate-detail/emailtemplate-detail-field.component';
import {
  EmailtemplateEditComponent
} from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';
import {
  EmailtemplateEditCustComponent
} from '../emailing-cust/base/emailtemplate/emailtemplate-edit.cust.component';
import {
  EmailsettingsComponent
} from './emailsettings/emailsettings.component';
import {
  EmailsettingsListComponent
} from './emailsettings/emailsettings-list/emailsettings-list.component';
import {
  EmailsettingsListViewComponent
} from './emailsettings/emailsettings-list/emailsettings-list-view.component';
import {
  EmailsettingsListCustComponent
} from '../emailing-cust/base/emailsettings/emailsettings-list.cust.component';
import {
  EmailsettingsListGeneralComponent
} from './emailsettings/emailsettings-list/emailsettings-list-general.component';
import {
  EmailsettingsListViewWidgetListComponent
} from './emailsettings/emailsettings-list/emailsettings-list-view-widget-list.component';
import {
  EmailsettingsListViewWidgetGridComponent
} from './emailsettings/emailsettings-list/emailsettings-list-view-widget-grid.component';
import {
  EmailsettingsListViewWidgetTableComponent
} from './emailsettings/emailsettings-list/emailsettings-list-view-widget-table.component';
import {
  EmailsettingsDetailComponent
} from './emailsettings/emailsettings-detail/emailsettings-detail.component';
import {
  EmailsettingsDetailCustComponent
} from '../emailing-cust/base/emailsettings/emailsettings-detail.cust.component';
import {
  EmailsettingsDetailFieldComponent
} from './emailsettings/emailsettings-detail/emailsettings-detail-field.component';
import {
  EmailsettingsEditComponent
} from './emailsettings/emailsettings-edit/emailsettings-edit.component';
import {
  EmailsettingsEditCustComponent
} from '../emailing-cust/base/emailsettings/emailsettings-edit.cust.component';
import {
  EmailqueueComponent
} from './emailqueue/emailqueue.component';
import {
  EmailqueueListComponent
} from './emailqueue/emailqueue-list/emailqueue-list.component';
import {
  EmailqueueListViewComponent
} from './emailqueue/emailqueue-list/emailqueue-list-view.component';
import {
  EmailqueueListCustComponent
} from '../emailing-cust/base/emailqueue/emailqueue-list.cust.component';
import {
  EmailqueueListGeneralComponent
} from './emailqueue/emailqueue-list/emailqueue-list-general.component';
import {
  EmailqueueListViewWidgetListComponent
} from './emailqueue/emailqueue-list/emailqueue-list-view-widget-list.component';
import {
  EmailqueueListViewWidgetGridComponent
} from './emailqueue/emailqueue-list/emailqueue-list-view-widget-grid.component';
import {
  EmailqueueListViewWidgetTableComponent
} from './emailqueue/emailqueue-list/emailqueue-list-view-widget-table.component';
import {
  EmailqueueDetailComponent
} from './emailqueue/emailqueue-detail/emailqueue-detail.component';
import {
  EmailqueueDetailCustComponent
} from '../emailing-cust/base/emailqueue/emailqueue-detail.cust.component';
import {
  EmailqueueDetailFieldComponent
} from './emailqueue/emailqueue-detail/emailqueue-detail-field.component';
import {
  EmailqueueEditComponent
} from './emailqueue/emailqueue-edit/emailqueue-edit.component';
import {
  EmailqueueEditCustComponent
} from '../emailing-cust/base/emailqueue/emailqueue-edit.cust.component';
import {
  EmailtemplateDetailSubComponent
} from './emailtemplate/emailtemplate-detail/emailtemplate-detail-sub.component';
import {
  EmailqueueDetailSubComponent
} from './emailqueue/emailqueue-detail/emailqueue-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsRichtextEditorModule,
    EmailingRoutingCoreModule,
  ],
  declarations: [
    EmailingComponent,
    EmailtemplateComponent,
    EmailtemplateListComponent,
    EmailtemplateListViewComponent,
    EmailtemplateListCustComponent,
    EmailtemplateListGeneralComponent,
    EmailtemplateListViewWidgetListComponent,
    EmailtemplateListViewWidgetGridComponent,
    EmailtemplateListViewWidgetTableComponent,
    EmailtemplateDetailCustComponent,
    EmailtemplateDetailComponent,
    EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,
    EmailtemplateEditCustComponent,
    EmailsettingsComponent,
    EmailsettingsListComponent,
    EmailsettingsListViewComponent,
    EmailsettingsListCustComponent,
    EmailsettingsListGeneralComponent,
    EmailsettingsListViewWidgetListComponent,
    EmailsettingsListViewWidgetGridComponent,
    EmailsettingsListViewWidgetTableComponent,
    EmailsettingsDetailCustComponent,
    EmailsettingsDetailComponent,
    EmailsettingsDetailFieldComponent,
    EmailsettingsEditComponent,
    EmailsettingsEditCustComponent,
    EmailqueueComponent,
    EmailqueueListComponent,
    EmailqueueListViewComponent,
    EmailqueueListCustComponent,
    EmailqueueListGeneralComponent,
    EmailqueueListViewWidgetListComponent,
    EmailqueueListViewWidgetGridComponent,
    EmailqueueListViewWidgetTableComponent,
    EmailqueueDetailCustComponent,
    EmailqueueDetailComponent,
    EmailqueueDetailFieldComponent,
    EmailqueueEditComponent,
    EmailqueueEditCustComponent,
    EmailtemplateDetailSubComponent,
    EmailqueueDetailSubComponent,
  ],
  exports: [
    EmailingComponent,
    EmailtemplateListGeneralComponent,
    EmailtemplateDetailComponent,
    EmailtemplateDetailFieldComponent,
    EmailtemplateEditComponent,
    EmailsettingsListGeneralComponent,
    EmailsettingsDetailComponent,
    EmailsettingsDetailFieldComponent,
    EmailsettingsEditComponent,
    EmailqueueListGeneralComponent,
    EmailqueueDetailComponent,
    EmailqueueDetailFieldComponent,
    EmailqueueEditComponent,
    EmailtemplateDetailSubComponent,
    EmailqueueDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    EmailtemplateEditComponent,
  ]
})
export class EmailingCoreModule {}