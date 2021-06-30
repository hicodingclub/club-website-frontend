// Import components for each schema
import {
  GeneralinfoListGeneralComponent
} from './generalinfo/generalinfo-list/generalinfo-list-general.component';
import {
  GeneralinfoDetailWidgetInfoComponent
} from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import {
  FaqListGeneralComponent
} from './faq/faq-list/faq-list-general.component';
import {
  EventListGeneralComponent
} from './event/event-list/event-list-general.component';
import {
  EventDetailWidgetPostComponent
} from './event/event-detail/event-detail-widget-post.component';
import {
  KeynoteListGeneralComponent
} from './keynote/keynote-list/keynote-list-general.component';
import {
  KeynoteDetailComponent
} from './keynote/keynote-detail/keynote-detail.component';
import {
  ArticleListGeneralComponent
} from './article/article-list/article-list-general.component';
import {
  ArticleDetailWidgetPostComponent
} from './article/article-detail/article-detail-widget-post.component';
import {
  PageListGeneralComponent
} from './page/page-list/page-list-general.component';
import {
  PageDetailWidgetPageComponent
} from './page/page-detail/page-detail-widget-page.component';
import {
  AlertListGeneralComponent
} from './alert/alert-list/alert-list-general.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const generalinfoRoutingCorePath = [{
  path: 'list',
  component: GeneralinfoListGeneralComponent
}, {
  path: 'detail/:id',
  component: GeneralinfoDetailWidgetInfoComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const faqRoutingCorePath = [{
  path: 'list',
  component: FaqListGeneralComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const eventRoutingCorePath = [{
  path: 'list',
  component: EventListGeneralComponent
}, {
  path: 'detail/:id',
  component: EventDetailWidgetPostComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const keynoteRoutingCorePath = [{
  path: 'list',
  component: KeynoteListGeneralComponent
}, {
  path: 'detail/:id',
  component: KeynoteDetailComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const articleRoutingCorePath = [{
  path: 'list',
  component: ArticleListGeneralComponent
}, {
  path: 'detail/:id',
  component: ArticleDetailWidgetPostComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const pageRoutingCorePath = [{
  path: 'list',
  component: PageListGeneralComponent
}, {
  path: 'detail/:id',
  component: PageDetailWidgetPageComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const alertRoutingCorePath = [{
  path: 'list',
  component: AlertListGeneralComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];