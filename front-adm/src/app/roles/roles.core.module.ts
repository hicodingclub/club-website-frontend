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
  RolesRoutingCoreModule
} from './roles-routing.core.module';
import {
  RolesComponent
} from './roles.component';
import {
  RolesRefSelectDirective
} from './roles.component';
// Import components for each schema
import {
  MroleComponent
} from './mrole/mrole.component';
import {
  MroleListComponent
} from './mrole/mrole-list/mrole-list.component';
import {
  MroleListViewComponent
} from './mrole/mrole-list/mrole-list-view.component';
import {
  MroleListCustComponent
} from '../roles-cust/base/mrole/mrole-list.cust.component';
import {
  MroleListGeneralComponent
} from './mrole/mrole-list/mrole-list-general.component';
import {
  MroleListSelectComponent
} from './mrole/mrole-list/mrole-list-select.component';
import {
  MroleListViewWidgetListComponent
} from './mrole/mrole-list/mrole-list-view-widget-list.component';
import {
  MroleListViewWidgetGridComponent
} from './mrole/mrole-list/mrole-list-view-widget-grid.component';
import {
  MroleListViewWidgetTableComponent
} from './mrole/mrole-list/mrole-list-view-widget-table.component';
import {
  MroleDetailComponent
} from './mrole/mrole-detail/mrole-detail.component';
import {
  MroleDetailCustComponent
} from '../roles-cust/base/mrole/mrole-detail.cust.component';
import {
  MroleDetailFieldComponent
} from './mrole/mrole-detail/mrole-detail-field.component';
import {
  MroleEditComponent
} from './mrole/mrole-edit/mrole-edit.component';
import {
  MroleEditCustComponent
} from '../roles-cust/base/mrole/mrole-edit.cust.component';
import {
  MmoduleComponent
} from './mmodule/mmodule.component';
import {
  MmoduleListComponent
} from './mmodule/mmodule-list/mmodule-list.component';
import {
  MmoduleListViewComponent
} from './mmodule/mmodule-list/mmodule-list-view.component';
import {
  MmoduleListCustComponent
} from '../roles-cust/base/mmodule/mmodule-list.cust.component';
import {
  MmoduleListGeneralComponent
} from './mmodule/mmodule-list/mmodule-list-general.component';
import {
  MmoduleListSelectComponent
} from './mmodule/mmodule-list/mmodule-list-select.component';
import {
  MmoduleListViewWidgetListComponent
} from './mmodule/mmodule-list/mmodule-list-view-widget-list.component';
import {
  MmoduleListViewWidgetGridComponent
} from './mmodule/mmodule-list/mmodule-list-view-widget-grid.component';
import {
  MmoduleListViewWidgetTableComponent
} from './mmodule/mmodule-list/mmodule-list-view-widget-table.component';
import {
  MmoduleDetailComponent
} from './mmodule/mmodule-detail/mmodule-detail.component';
import {
  MmoduleDetailCustComponent
} from '../roles-cust/base/mmodule/mmodule-detail.cust.component';
import {
  MmoduleDetailFieldComponent
} from './mmodule/mmodule-detail/mmodule-detail-field.component';
import {
  MmoduleEditComponent
} from './mmodule/mmodule-edit/mmodule-edit.component';
import {
  MmoduleEditCustComponent
} from '../roles-cust/base/mmodule/mmodule-edit.cust.component';
import {
  MpermissionComponent
} from './mpermission/mpermission.component';
import {
  MpermissionListComponent
} from './mpermission/mpermission-list/mpermission-list.component';
import {
  MpermissionListViewComponent
} from './mpermission/mpermission-list/mpermission-list-view.component';
import {
  MpermissionListCustComponent
} from '../roles-cust/base/mpermission/mpermission-list.cust.component';
import {
  MpermissionListGeneralComponent
} from './mpermission/mpermission-list/mpermission-list-general.component';
import {
  MpermissionListSubComponent
} from './mpermission/mpermission-list/mpermission-list-sub.component';
import {
  MpermissionListViewWidgetListComponent
} from './mpermission/mpermission-list/mpermission-list-view-widget-list.component';
import {
  MpermissionListViewWidgetGridComponent
} from './mpermission/mpermission-list/mpermission-list-view-widget-grid.component';
import {
  MpermissionListViewWidgetTableComponent
} from './mpermission/mpermission-list/mpermission-list-view-widget-table.component';
import {
  MpermissionDetailComponent
} from './mpermission/mpermission-detail/mpermission-detail.component';
import {
  MpermissionDetailCustComponent
} from '../roles-cust/base/mpermission/mpermission-detail.cust.component';
import {
  MpermissionDetailFieldComponent
} from './mpermission/mpermission-detail/mpermission-detail-field.component';
import {
  MpermissionEditComponent
} from './mpermission/mpermission-edit/mpermission-edit.component';
import {
  MpermissionEditCustComponent
} from '../roles-cust/base/mpermission/mpermission-edit.cust.component';
import {
  MaccountComponent
} from './maccount/maccount.component';
import {
  MaccountListComponent
} from './maccount/maccount-list/maccount-list.component';
import {
  MaccountListViewComponent
} from './maccount/maccount-list/maccount-list-view.component';
import {
  MaccountListCustComponent
} from '../roles-cust/base/maccount/maccount-list.cust.component';
import {
  MaccountListGeneralComponent
} from './maccount/maccount-list/maccount-list-general.component';
import {
  MaccountListSelectComponent
} from './maccount/maccount-list/maccount-list-select.component';
import {
  MaccountListViewWidgetListComponent
} from './maccount/maccount-list/maccount-list-view-widget-list.component';
import {
  MaccountListViewWidgetGridComponent
} from './maccount/maccount-list/maccount-list-view-widget-grid.component';
import {
  MaccountListViewWidgetTableComponent
} from './maccount/maccount-list/maccount-list-view-widget-table.component';
import {
  MaccountDetailComponent
} from './maccount/maccount-detail/maccount-detail.component';
import {
  MaccountDetailCustComponent
} from '../roles-cust/base/maccount/maccount-detail.cust.component';
import {
  MaccountDetailFieldComponent
} from './maccount/maccount-detail/maccount-detail-field.component';
import {
  MaccountEditComponent
} from './maccount/maccount-edit/maccount-edit.component';
import {
  MaccountEditCustComponent
} from '../roles-cust/base/maccount/maccount-edit.cust.component';
import {
  MaccountroleComponent
} from './maccountrole/maccountrole.component';
import {
  MaccountroleListComponent
} from './maccountrole/maccountrole-list/maccountrole-list.component';
import {
  MaccountroleListViewComponent
} from './maccountrole/maccountrole-list/maccountrole-list-view.component';
import {
  MaccountroleListCustComponent
} from '../roles-cust/base/maccountrole/maccountrole-list.cust.component';
import {
  MaccountroleListGeneralComponent
} from './maccountrole/maccountrole-list/maccountrole-list-general.component';
import {
  MaccountroleListSubComponent
} from './maccountrole/maccountrole-list/maccountrole-list-sub.component';
import {
  MaccountroleListViewWidgetListComponent
} from './maccountrole/maccountrole-list/maccountrole-list-view-widget-list.component';
import {
  MaccountroleListViewWidgetGridComponent
} from './maccountrole/maccountrole-list/maccountrole-list-view-widget-grid.component';
import {
  MaccountroleListViewWidgetTableComponent
} from './maccountrole/maccountrole-list/maccountrole-list-view-widget-table.component';
import {
  MaccountroleDetailComponent
} from './maccountrole/maccountrole-detail/maccountrole-detail.component';
import {
  MaccountroleDetailCustComponent
} from '../roles-cust/base/maccountrole/maccountrole-detail.cust.component';
import {
  MaccountroleDetailFieldComponent
} from './maccountrole/maccountrole-detail/maccountrole-detail-field.component';
import {
  MaccountroleEditComponent
} from './maccountrole/maccountrole-edit/maccountrole-edit.component';
import {
  MaccountroleEditCustComponent
} from '../roles-cust/base/maccountrole/maccountrole-edit.cust.component';
import {
  MroleDetailPopComponent
} from './mrole/mrole-detail/mrole-detail-pop.component';
import {
  MroleDetailSelComponent
} from './mrole/mrole-detail/mrole-detail-sel.component';
import {
  MmoduleDetailPopComponent
} from './mmodule/mmodule-detail/mmodule-detail-pop.component';
import {
  MmoduleDetailSelComponent
} from './mmodule/mmodule-detail/mmodule-detail-sel.component';
import {
  MaccountDetailPopComponent
} from './maccount/maccount-detail/maccount-detail-pop.component';
import {
  MaccountDetailSelComponent
} from './maccount/maccount-detail/maccount-detail-sel.component';
import {
  MpermissionDetailSubComponent
} from './mpermission/mpermission-detail/mpermission-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ActionEmailModule,
    RolesRoutingCoreModule,
  ],
  declarations: [
    RolesComponent,
    RolesRefSelectDirective,
    MroleComponent,
    MroleListComponent,
    MroleListViewComponent,
    MroleListCustComponent,
    MroleListGeneralComponent,
    MroleListSelectComponent,
    MroleListViewWidgetListComponent,
    MroleListViewWidgetGridComponent,
    MroleListViewWidgetTableComponent,
    MroleDetailCustComponent,
    MroleDetailComponent,
    MroleDetailFieldComponent,
    MroleEditComponent,
    MroleEditCustComponent,
    MmoduleComponent,
    MmoduleListComponent,
    MmoduleListViewComponent,
    MmoduleListCustComponent,
    MmoduleListGeneralComponent,
    MmoduleListSelectComponent,
    MmoduleListViewWidgetListComponent,
    MmoduleListViewWidgetGridComponent,
    MmoduleListViewWidgetTableComponent,
    MmoduleDetailCustComponent,
    MmoduleDetailComponent,
    MmoduleDetailFieldComponent,
    MmoduleEditComponent,
    MmoduleEditCustComponent,
    MpermissionComponent,
    MpermissionListComponent,
    MpermissionListViewComponent,
    MpermissionListCustComponent,
    MpermissionListGeneralComponent,
    MpermissionListSubComponent,
    MpermissionListViewWidgetListComponent,
    MpermissionListViewWidgetGridComponent,
    MpermissionListViewWidgetTableComponent,
    MpermissionDetailCustComponent,
    MpermissionDetailComponent,
    MpermissionDetailFieldComponent,
    MpermissionEditComponent,
    MpermissionEditCustComponent,
    MaccountComponent,
    MaccountListComponent,
    MaccountListViewComponent,
    MaccountListCustComponent,
    MaccountListGeneralComponent,
    MaccountListSelectComponent,
    MaccountListViewWidgetListComponent,
    MaccountListViewWidgetGridComponent,
    MaccountListViewWidgetTableComponent,
    MaccountDetailCustComponent,
    MaccountDetailComponent,
    MaccountDetailFieldComponent,
    MaccountEditComponent,
    MaccountEditCustComponent,
    MaccountroleComponent,
    MaccountroleListComponent,
    MaccountroleListViewComponent,
    MaccountroleListCustComponent,
    MaccountroleListGeneralComponent,
    MaccountroleListSubComponent,
    MaccountroleListViewWidgetListComponent,
    MaccountroleListViewWidgetGridComponent,
    MaccountroleListViewWidgetTableComponent,
    MaccountroleDetailCustComponent,
    MaccountroleDetailComponent,
    MaccountroleDetailFieldComponent,
    MaccountroleEditComponent,
    MaccountroleEditCustComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MaccountDetailPopComponent,
    MaccountDetailSelComponent,
    MpermissionDetailSubComponent,
  ],
  exports: [
    RolesComponent,
    MroleListGeneralComponent,
    MroleListSelectComponent,
    MroleDetailComponent,
    MroleDetailFieldComponent,
    MroleEditComponent,
    MmoduleListGeneralComponent,
    MmoduleListSelectComponent,
    MmoduleDetailComponent,
    MmoduleDetailFieldComponent,
    MmoduleEditComponent,
    MpermissionListGeneralComponent,
    MpermissionListSubComponent,
    MpermissionDetailComponent,
    MpermissionDetailFieldComponent,
    MpermissionEditComponent,
    MaccountListGeneralComponent,
    MaccountListSelectComponent,
    MaccountDetailComponent,
    MaccountDetailFieldComponent,
    MaccountEditComponent,
    MaccountroleListGeneralComponent,
    MaccountroleListSubComponent,
    MaccountroleDetailComponent,
    MaccountroleDetailFieldComponent,
    MaccountroleEditComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MaccountDetailPopComponent,
    MaccountDetailSelComponent,
    MpermissionDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    MroleListSelectComponent,
    MroleDetailPopComponent,
    MroleDetailSelComponent,
    MmoduleListSelectComponent,
    MmoduleDetailPopComponent,
    MmoduleDetailSelComponent,
    MaccountListSelectComponent,
    MaccountDetailPopComponent,
    MaccountDetailSelComponent,
    MroleEditComponent,
    MmoduleEditComponent,
    MpermissionEditComponent,
    MaccountEditComponent,
    MaccountroleEditComponent,
  ]
})
export class RolesCoreModule {}