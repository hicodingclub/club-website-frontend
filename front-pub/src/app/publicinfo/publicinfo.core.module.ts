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
} from './publicinfo.directive';
import {
  FileUploadModule
} from '@hicoder/angular-file';
import {
  MddsRichtextEditorModule
} from '@hicoder/angular-richtext';
import {
  MddsCoreModule
} from '@hicoder/angular-core';
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
  GeneralinfoListCustComponent
} from '../publicinfo-cust/base/generalinfo/generalinfo-list.cust.component';
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
  FaqListCustComponent
} from '../publicinfo-cust/base/faq/faq-list.cust.component';
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
  EventListCustComponent
} from '../publicinfo-cust/base/event/event-list.cust.component';
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
  KeynoteListCustComponent
} from '../publicinfo-cust/base/keynote/keynote-list.cust.component';
import {
  KeynoteListWidgetSldComponent
} from './keynote/keynote-list/keynote-list-widget-sld.component';
import {
  KeynoteDetailComponent
} from './keynote/keynote-detail/keynote-detail.component';
import {
  KeynoteDetailCustComponent
} from '../publicinfo-cust/base/keynote/keynote-detail.cust.component';
import {
  KeynoteDetailWidgetSlideComponent
} from './keynote/keynote-detail/keynote-detail-widget-slide.component';
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
  ArticleListCustComponent
} from '../publicinfo-cust/base/article/article-list.cust.component';
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
  PageListCustComponent
} from '../publicinfo-cust/base/page/page-list.cust.component';
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
  AlertListCustComponent
} from '../publicinfo-cust/base/alert/alert-list.cust.component';
import {
  AlertDetailFieldComponent
} from './alert/alert-detail/alert-detail-field.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FileUploadModule,
    MddsRichtextEditorModule,
    PublicinfoRoutingCoreModule,
  ],
  declarations: [
    PublicinfoComponent,
    GeneralinfoComponent,
    GeneralinfoListComponent,
    GeneralinfoListCustComponent,
    GeneralinfoDetailCustComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    FaqComponent,
    FaqListComponent,
    FaqListCustComponent,
    FaqDetailFieldComponent,
    EventComponent,
    EventListComponent,
    EventListCustComponent,
    EventDetailCustComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    KeynoteComponent,
    KeynoteListComponent,
    KeynoteListCustComponent,
    KeynoteListWidgetSldComponent,
    KeynoteDetailCustComponent,
    KeynoteDetailComponent,
    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    ArticleComponent,
    ArticleListComponent,
    ArticleListCustComponent,
    ArticleDetailCustComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    PageComponent,
    PageListComponent,
    PageListCustComponent,
    PageDetailCustComponent,
    PageDetailComponent,
    PageDetailWidgetPageComponent,
    PageDetailFieldComponent,
    AlertComponent,
    AlertListComponent,
    AlertListCustComponent,
    AlertDetailFieldComponent,
  ],
  exports: [
    PublicinfoComponent,
    GeneralinfoListComponent,
    GeneralinfoDetailComponent,
    GeneralinfoDetailWidgetInfoComponent,
    GeneralinfoDetailFieldComponent,
    FaqListComponent,
    FaqDetailFieldComponent,
    EventListComponent,
    EventDetailComponent,
    EventDetailWidgetPostComponent,
    EventDetailFieldComponent,
    KeynoteListComponent,
    KeynoteListWidgetSldComponent,
    KeynoteDetailComponent,
    KeynoteDetailWidgetSlideComponent,
    KeynoteDetailFieldComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleDetailWidgetPostComponent,
    ArticleDetailFieldComponent,
    PageListComponent,
    PageDetailComponent,
    PageDetailWidgetPageComponent,
    PageDetailFieldComponent,
    AlertListComponent,
    AlertDetailFieldComponent,
  ],
  providers: [{
    provide: NgbDateParserFormatter,
    useClass: MraNgbDateFormatterService
  }, ],
  entryComponents: [
    GeneralinfoDetailWidgetInfoComponent,
    EventDetailWidgetPostComponent,
    KeynoteListWidgetSldComponent,
    KeynoteDetailWidgetSlideComponent,
    ArticleDetailWidgetPostComponent,
    PageDetailWidgetPageComponent,
  ]
})
export class PublicinfoCoreModule {}