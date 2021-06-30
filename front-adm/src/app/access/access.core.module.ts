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
  AccessRoutingCoreModule
} from './access-routing.core.module';
import {
  AccessComponent
} from './access.component';
import {
  AccessRefSelectDirective
} from './access.component';
// Import components for each schema
import {
  MusergroupComponent
} from './musergroup/musergroup.component';
import {
  MusergroupListComponent
} from './musergroup/musergroup-list/musergroup-list.component';
import {
  MusergroupListViewComponent
} from './musergroup/musergroup-list/musergroup-list-view.component';
import {
  MusergroupListCustComponent
} from '../access-cust/base/musergroup/musergroup-list.cust.component';
import {
  MusergroupListGeneralComponent
} from './musergroup/musergroup-list/musergroup-list-general.component';
import {
  MusergroupListSelectComponent
} from './musergroup/musergroup-list/musergroup-list-select.component';
import {
  MusergroupListViewWidgetListComponent
} from './musergroup/musergroup-list/musergroup-list-view-widget-list.component';
import {
  MusergroupListViewWidgetGridComponent
} from './musergroup/musergroup-list/musergroup-list-view-widget-grid.component';
import {
  MusergroupListViewWidgetTableComponent
} from './musergroup/musergroup-list/musergroup-list-view-widget-table.component';
import {
  MusergroupDetailComponent
} from './musergroup/musergroup-detail/musergroup-detail.component';
import {
  MusergroupDetailCustComponent
} from '../access-cust/base/musergroup/musergroup-detail.cust.component';
import {
  MusergroupDetailFieldComponent
} from './musergroup/musergroup-detail/musergroup-detail-field.component';
import {
  MusergroupEditComponent
} from './musergroup/musergroup-edit/musergroup-edit.component';
import {
  MusergroupEditCustComponent
} from '../access-cust/base/musergroup/musergroup-edit.cust.component';
import {
  MpubmoduleComponent
} from './mpubmodule/mpubmodule.component';
import {
  MpubmoduleListComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list.component';
import {
  MpubmoduleListViewComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view.component';
import {
  MpubmoduleListCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-list.cust.component';
import {
  MpubmoduleListGeneralComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-general.component';
import {
  MpubmoduleListSelectComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-select.component';
import {
  MpubmoduleListViewWidgetListComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view-widget-list.component';
import {
  MpubmoduleListViewWidgetGridComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view-widget-grid.component';
import {
  MpubmoduleListViewWidgetTableComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-view-widget-table.component';
import {
  MpubmoduleDetailComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail.component';
import {
  MpubmoduleDetailCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-detail.cust.component';
import {
  MpubmoduleDetailFieldComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-field.component';
import {
  MpubmoduleEditComponent
} from './mpubmodule/mpubmodule-edit/mpubmodule-edit.component';
import {
  MpubmoduleEditCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-edit.cust.component';
import {
  MpubaccessComponent
} from './mpubaccess/mpubaccess.component';
import {
  MpubaccessListComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list.component';
import {
  MpubaccessListViewComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-view.component';
import {
  MpubaccessListCustComponent
} from '../access-cust/base/mpubaccess/mpubaccess-list.cust.component';
import {
  MpubaccessListGeneralComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-general.component';
import {
  MpubaccessListSubComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-sub.component';
import {
  MpubaccessListViewWidgetListComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-view-widget-list.component';
import {
  MpubaccessListViewWidgetGridComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-view-widget-grid.component';
import {
  MpubaccessListViewWidgetTableComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-view-widget-table.component';
import {
  MpubaccessDetailComponent
} from './mpubaccess/mpubaccess-detail/mpubaccess-detail.component';
import {
  MpubaccessDetailCustComponent
} from '../access-cust/base/mpubaccess/mpubaccess-detail.cust.component';
import {
  MpubaccessDetailFieldComponent
} from './mpubaccess/mpubaccess-detail/mpubaccess-detail-field.component';
import {
  MpubaccessEditComponent
} from './mpubaccess/mpubaccess-edit/mpubaccess-edit.component';
import {
  MpubaccessEditCustComponent
} from '../access-cust/base/mpubaccess/mpubaccess-edit.cust.component';
import {
  MusergroupDetailPopComponent
} from './musergroup/musergroup-detail/musergroup-detail-pop.component';
import {
  MusergroupDetailSelComponent
} from './musergroup/musergroup-detail/musergroup-detail-sel.component';
import {
  MpubmoduleDetailPopComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import {
  MpubmoduleDetailSelComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';
import {
  MpubaccessDetailSubComponent
} from './mpubaccess/mpubaccess-detail/mpubaccess-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AccessRoutingCoreModule,
  ],
  declarations: [
    AccessComponent,
    AccessRefSelectDirective,
    MusergroupComponent,
    MusergroupListComponent,
    MusergroupListViewComponent,
    MusergroupListCustComponent,
    MusergroupListGeneralComponent,
    MusergroupListSelectComponent,
    MusergroupListViewWidgetListComponent,
    MusergroupListViewWidgetGridComponent,
    MusergroupListViewWidgetTableComponent,
    MusergroupDetailCustComponent,
    MusergroupDetailComponent,
    MusergroupDetailFieldComponent,
    MusergroupEditComponent,
    MusergroupEditCustComponent,
    MpubmoduleComponent,
    MpubmoduleListComponent,
    MpubmoduleListViewComponent,
    MpubmoduleListCustComponent,
    MpubmoduleListGeneralComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleListViewWidgetListComponent,
    MpubmoduleListViewWidgetGridComponent,
    MpubmoduleListViewWidgetTableComponent,
    MpubmoduleDetailCustComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubmoduleEditCustComponent,
    MpubaccessComponent,
    MpubaccessListComponent,
    MpubaccessListViewComponent,
    MpubaccessListCustComponent,
    MpubaccessListGeneralComponent,
    MpubaccessListSubComponent,
    MpubaccessListViewWidgetListComponent,
    MpubaccessListViewWidgetGridComponent,
    MpubaccessListViewWidgetTableComponent,
    MpubaccessDetailCustComponent,
    MpubaccessDetailComponent,
    MpubaccessDetailFieldComponent,
    MpubaccessEditComponent,
    MpubaccessEditCustComponent,
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MpubaccessDetailSubComponent,
  ],
  exports: [
    AccessComponent,
    MusergroupListGeneralComponent,
    MusergroupListSelectComponent,
    MusergroupDetailComponent,
    MusergroupDetailFieldComponent,
    MusergroupEditComponent,
    MpubmoduleListGeneralComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubaccessListGeneralComponent,
    MpubaccessListSubComponent,
    MpubaccessDetailComponent,
    MpubaccessDetailFieldComponent,
    MpubaccessEditComponent,
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MpubaccessDetailSubComponent,
  ],
  providers: [],
  entryComponents: [
    MusergroupListSelectComponent,
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MusergroupEditComponent,
    MpubmoduleEditComponent,
    MpubaccessEditComponent,
  ]
})
export class AccessCoreModule {}