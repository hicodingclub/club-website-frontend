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
  WebsitesRoutingCoreModule
} from './websites-routing.core.module';
import {
  WebsitesComponent
} from './websites.component';
// Import components for each schema
import {
  SiteComponent
} from './site/site.component';
import {
  SiteListComponent
} from './site/site-list/site-list.component';
import {
  SiteListViewComponent
} from './site/site-list/site-list-view.component';
import {
  SiteListCustComponent
} from '../websites-cust/base/site/site-list.cust.component';
import {
  SiteListGeneralComponent
} from './site/site-list/site-list-general.component';
import {
  SiteListViewWidgetListComponent
} from './site/site-list/site-list-view-widget-list.component';
import {
  SiteListViewWidgetGridComponent
} from './site/site-list/site-list-view-widget-grid.component';
import {
  SiteListViewWidgetTableComponent
} from './site/site-list/site-list-view-widget-table.component';
import {
  SiteDetailComponent
} from './site/site-detail/site-detail.component';
import {
  SiteDetailCustComponent
} from '../websites-cust/base/site/site-detail.cust.component';
import {
  SiteDetailFieldComponent
} from './site/site-detail/site-detail-field.component';
import {
  SiteEditComponent
} from './site/site-edit/site-edit.component';
import {
  SiteEditCustComponent
} from '../websites-cust/base/site/site-edit.cust.component';
import {
  SiteDetailSubComponent
} from './site/site-detail/site-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    WebsitesRoutingCoreModule,
  ],
  declarations: [
    WebsitesComponent,
    SiteComponent,
    SiteListComponent,
    SiteListViewComponent,
    SiteListCustComponent,
    SiteListGeneralComponent,
    SiteListViewWidgetListComponent,
    SiteListViewWidgetGridComponent,
    SiteListViewWidgetTableComponent,
    SiteDetailCustComponent,
    SiteDetailComponent,
    SiteDetailFieldComponent,
    SiteEditComponent,
    SiteEditCustComponent,
    SiteDetailSubComponent,
  ],
  exports: [
    WebsitesComponent,
    SiteListGeneralComponent,
    SiteDetailComponent,
    SiteDetailFieldComponent,
    SiteEditComponent,
    SiteDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    SiteEditComponent,
  ]
})
export class WebsitesCoreModule {}