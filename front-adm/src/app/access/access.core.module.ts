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
  MddsCoreModule
} from '@hicoder/angular-core';
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
  MusergroupListCustComponent
} from '../access-cust/base/musergroup/musergroup-list.cust.component';
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
  MpubmoduleListCustComponent
} from '../access-cust/base/mpubmodule/mpubmodule-list.cust.component';
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
  MpubaccessListCustComponent
} from '../access-cust/base/mpubaccess/mpubaccess-list.cust.component';
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
  MusergroupListSelectComponent
} from './musergroup/musergroup-list/musergroup-list-select.component';
import {
  MusergroupDetailPopComponent
} from './musergroup/musergroup-detail/musergroup-detail-pop.component';
import {
  MusergroupDetailSelComponent
} from './musergroup/musergroup-detail/musergroup-detail-sel.component';
import {
  MpubmoduleListSelectComponent
} from './mpubmodule/mpubmodule-list/mpubmodule-list-select.component';
import {
  MpubmoduleDetailPopComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-pop.component';
import {
  MpubmoduleDetailSelComponent
} from './mpubmodule/mpubmodule-detail/mpubmodule-detail-sel.component';
import {
  MpubaccessListSubComponent
} from './mpubaccess/mpubaccess-list/mpubaccess-list-sub.component';
import {
  MpubaccessDetailSubComponent
} from './mpubaccess/mpubaccess-detail/mpubaccess-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    AccessRoutingCoreModule,
  ],
  declarations: [
    AccessComponent,
    AccessRefSelectDirective,
    MusergroupComponent,
    MusergroupListComponent,
    MusergroupListCustComponent,
    MusergroupDetailCustComponent,
    MusergroupDetailComponent,
    MusergroupDetailFieldComponent,
    MusergroupEditComponent,
    MusergroupEditCustComponent,
    MpubmoduleComponent,
    MpubmoduleListComponent,
    MpubmoduleListCustComponent,
    MpubmoduleDetailCustComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubmoduleEditCustComponent,
    MpubaccessComponent,
    MpubaccessListComponent,
    MpubaccessListCustComponent,
    MpubaccessDetailCustComponent,
    MpubaccessDetailComponent,
    MpubaccessDetailFieldComponent,
    MpubaccessEditComponent,
    MpubaccessEditCustComponent,
    MusergroupListSelectComponent,
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MpubaccessListSubComponent,
    MpubaccessDetailSubComponent,
  ],
  exports: [
    AccessComponent,
    MusergroupListComponent,
    MusergroupDetailComponent,
    MusergroupDetailFieldComponent,
    MusergroupEditComponent,
    MpubmoduleListComponent,
    MpubmoduleDetailComponent,
    MpubmoduleDetailFieldComponent,
    MpubmoduleEditComponent,
    MpubaccessListComponent,
    MpubaccessDetailComponent,
    MpubaccessDetailFieldComponent,
    MpubaccessEditComponent,
    MusergroupListSelectComponent,
    MusergroupDetailPopComponent,
    MusergroupDetailSelComponent,
    MpubmoduleListSelectComponent,
    MpubmoduleDetailPopComponent,
    MpubmoduleDetailSelComponent,
    MpubaccessListSubComponent,
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