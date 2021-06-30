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
  MddsRichtextEditorModule,
} from '@hicoder/angular-richtext';
import {
  PublicinfoRoutingCoreModule
} from './publicinfo-routing.core.module';
import {
  PublicinfoComponent
} from './publicinfo.component';
// Import components for each schema
import {
  GeneralinfoComponent
} from './generalinfo/generalinfo.component';
import {
  GeneralinfoListComponent
} from './generalinfo/generalinfo-list/generalinfo-list.component';
import {
  GeneralinfoListViewComponent
} from './generalinfo/generalinfo-list/generalinfo-list-view.component';
import {
  GeneralinfoListCustComponent
} from '../publicinfo-cust/base/generalinfo/generalinfo-list.cust.component';
import {
  GeneralinfoListGeneralComponent
} from './generalinfo/generalinfo-list/generalinfo-list-general.component';
import {
  GeneralinfoListViewWidgetListComponent
} from './generalinfo/generalinfo-list/generalinfo-list-view-widget-list.component';
import {
  GeneralinfoDetailComponent
} from './generalinfo/generalinfo-detail/generalinfo-detail.component';
import {
  GeneralinfoDetailCustComponent
} from '../publicinfo-cust/base/generalinfo/generalinfo-detail.cust.component';
import {
  GeneralinfoDetailWidgetInfoComponent
} from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import {
  GeneralinfoDetailFieldComponent
} from './generalinfo/generalinfo-detail/generalinfo-detail-field.component';
import {
  FaqComponent
} from './faq/faq.component';
import {
  FaqListComponent
} from './faq/faq-list/faq-list.component';
import {
  FaqListViewComponent
} from './faq/faq-list/faq-list-view.component';
import {
  FaqListCustComponent
} from '../publicinfo-cust/base/faq/faq-list.cust.component';
import {
  FaqListGeneralComponent
} from './faq/faq-list/faq-list-general.component';
import {
  FaqListViewWidgetListComponent
} from './faq/faq-list/faq-list-view-widget-list.component';
import {
  FaqListViewWidgetGridComponent
} from './faq/faq-list/faq-list-view-widget-grid.component';
import {
  FaqListViewWidgetTableComponent
} from './faq/faq-list/faq-list-view-widget-table.component';
import {
  FaqDetailFieldComponent
} from './faq/faq-detail/faq-detail-field.component';
import {
  EventComponent
} from './event/event.component';
import {
  EventListComponent
} from './event/event-list/event-list.component';
import {
  EventListViewComponent
} from './event/event-list/event-list-view.component';
import {
  EventListCustComponent
} from '../publicinfo-cust/base/event/event-list.cust.component';
import {
  EventListGeneralComponent
} from './event/event-list/event-list-general.component';
import {
  EventListViewWidgetListComponent
} from './event/event-list/event-list-view-widget-list.component';
import {
  EventDetailComponent
} from './event/event-detail/event-detail.component';
import {
  EventDetailCustComponent
} from '../publicinfo-cust/base/event/event-detail.cust.component';
import {
  EventDetailWidgetPostComponent
} from './event/event-detail/event-detail-widget-post.component';
import {
  EventDetailFieldComponent
} from './event/event-detail/event-detail-field.component';
import {
  KeynoteComponent
} from './keynote/keynote.component';
import {
  KeynoteListComponent
} from './keynote/keynote-list/keynote-list.component';
import {
  KeynoteListViewComponent
} from './keynote/keynote-list/keynote-list-view.component';
import {
  KeynoteListCustComponent
} from '../publicinfo-cust/base/keynote/keynote-list.cust.component';
import {
  KeynoteListGeneralComponent
} from './keynote/keynote-list/keynote-list-general.component';
import {
  KeynoteListViewWidgetSldComponent
} from './keynote/keynote-list/keynote-list-view-widget-sld.component';
import {
  KeynoteDetailComponent
} from './keynote/keynote-detail/keynote-detail.component';
import {
  KeynoteDetailCustComponent
} from '../publicinfo-cust/base/keynote/keynote-detail.cust.component';
import {
  KeynoteDetailFieldComponent
} from './keynote/keynote-detail/keynote-detail-field.component';
import {
  ArticleComponent
} from './article/article.component';
import {
  ArticleListComponent
} from './article/article-list/article-list.component';
import {
  ArticleListViewComponent
} from './article/article-list/article-list-view.component';
import {
  ArticleListCustComponent
} from '../publicinfo-cust/base/article/article-list.cust.component';
import {
  ArticleListGeneralComponent
} from './article/article-list/article-list-general.component';
import {
  ArticleListViewWidgetListComponent
} from './article/article-list/article-list-view-widget-list.component';
import {
  ArticleListViewWidgetGridComponent
} from './article/article-list/article-list-view-widget-grid.component';
import {
  ArticleListViewWidgetTableComponent
} from './article/article-list/article-list-view-widget-table.component';
import {
  ArticleDetailComponent
} from './article/article-detail/article-detail.component';
import {
  ArticleDetailCustComponent
} from '../publicinfo-cust/base/article/article-detail.cust.component';
import {
  ArticleDetailWidgetPostComponent
} from './article/article-detail/article-detail-widget-post.component';
import {
  ArticleDetailFieldComponent
} from './article/article-detail/article-detail-field.component';
import {
  PageComponent
} from './page/page.component';
import {
  PageListComponent
} from './page/page-list/page-list.component';
import {
  PageListViewComponent
} from './page/page-list/page-list-view.component';
import {
  PageListCustComponent
} from '../publicinfo-cust/base/page/page-list.cust.component';
import {
  PageListGeneralComponent
} from './page/page-list/page-list-general.component';
import {
  PageListViewWidgetListComponent
} from './page/page-list/page-list-view-widget-list.component';
import {
  PageListViewWidgetGridComponent
} from './page/page-list/page-list-view-widget-grid.component';
import {
  PageListViewWidgetTableComponent
} from './page/page-list/page-list-view-widget-table.component';
import {
  PageDetailComponent
} from './page/page-detail/page-detail.component';
import {
  PageDetailCustComponent
} from '../publicinfo-cust/base/page/page-detail.cust.component';
import {
  PageDetailWidgetPageComponent
} from './page/page-detail/page-detail-widget-page.component';
import {
  PageDetailFieldComponent
} from './page/page-detail/page-detail-field.component';
import {
  AlertComponent
} from './alert/alert.component';
import {
  AlertListComponent
} from './alert/alert-list/alert-list.component';
import {
  AlertListViewComponent
} from './alert/alert-list/alert-list-view.component';
import {
  AlertListCustComponent
} from '../publicinfo-cust/base/alert/alert-list.cust.component';
import {
  AlertListGeneralComponent
} from './alert/alert-list/alert-list-general.component';
import {
  AlertListViewWidgetListComponent
} from './alert/alert-list/alert-list-view-widget-list.component';
import {
  AlertListViewWidgetGridComponent
} from './alert/alert-list/alert-list-view-widget-grid.component';
import {
  AlertListViewWidgetTableComponent
} from './alert/alert-list/alert-list-view-widget-table.component';
import {
  AlertDetailFieldComponent
} from './alert/alert-detail/alert-detail-field.component';
import {
  EventDetailSubComponent
} from './event/event-detail/event-detail-sub.component';
import {
  ArticleDetailSubComponent
} from './article/article-detail/article-detail-sub.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    FilesModule,
    MddsRichtextEditorModule,
    PublicinfoRoutingCoreModule,
  ],
  declarations: [
    PublicinfoComponent,
    GeneralinfoComponent,
    GeneralinfoListComponent,
    GeneralinfoListViewComponent,
    GeneralinfoListCustComponent,
    GeneralinfoListGeneralComponent,
    GeneralinfoListViewWidgetListComponent,
    GeneralinfoDetailCustComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    FaqComponent,
    FaqListComponent,
    FaqListViewComponent,
    FaqListCustComponent,
    FaqListGeneralComponent,
    FaqListViewWidgetListComponent,
    FaqListViewWidgetGridComponent,
    FaqListViewWidgetTableComponent,
    FaqDetailFieldComponent,
    EventComponent,
    EventListComponent,
    EventListViewComponent,
    EventListCustComponent,
    EventListGeneralComponent,
    EventListViewWidgetListComponent,
    EventDetailCustComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    KeynoteComponent,
    KeynoteListComponent,
    KeynoteListViewComponent,
    KeynoteListCustComponent,
    KeynoteListGeneralComponent,
    KeynoteListViewWidgetSldComponent,
    KeynoteDetailCustComponent,
    KeynoteDetailComponent,
    KeynoteDetailFieldComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleListViewComponent,
    ArticleListCustComponent,
    ArticleListGeneralComponent,
    ArticleListViewWidgetListComponent,
    ArticleListViewWidgetGridComponent,
    ArticleListViewWidgetTableComponent,
    ArticleDetailCustComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    PageComponent,
    PageListComponent,
    PageListViewComponent,
    PageListCustComponent,
    PageListGeneralComponent,
    PageListViewWidgetListComponent,
    PageListViewWidgetGridComponent,
    PageListViewWidgetTableComponent,
    PageDetailCustComponent,
    PageDetailComponent,
    PageDetailWidgetPageComponent,
    PageDetailFieldComponent,
    AlertComponent,
    AlertListComponent,
    AlertListViewComponent,
    AlertListCustComponent,
    AlertListGeneralComponent,
    AlertListViewWidgetListComponent,
    AlertListViewWidgetGridComponent,
    AlertListViewWidgetTableComponent,
    AlertDetailFieldComponent,
    EventDetailSubComponent,
    ArticleDetailSubComponent,
  ],
  exports: [
    PublicinfoComponent,
    GeneralinfoListGeneralComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    FaqListGeneralComponent,
    FaqDetailFieldComponent,
    EventListGeneralComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    KeynoteListGeneralComponent,
    KeynoteDetailComponent,
    KeynoteDetailFieldComponent,
    ArticleListGeneralComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    PageListGeneralComponent,
    PageDetailComponent,
    PageDetailWidgetPageComponent,
    PageDetailFieldComponent,
    AlertListGeneralComponent,
    AlertDetailFieldComponent,
    EventDetailSubComponent,
    ArticleDetailSubComponent,
  ],
  providers: [{
    provide: MDDS_NGB_DATE_FORMAT,
    useValue: 'MM-DD-YYYY'
  }, {
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    GeneralinfoDetailWidgetInfoComponent,
    EventDetailWidgetPostComponent,
    ArticleDetailWidgetPostComponent,
    PageDetailWidgetPageComponent,
  ]
})
export class PublicinfoCoreModule {}