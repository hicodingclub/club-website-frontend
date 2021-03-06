// Import components for each schema
import {
  GeneralinfoListComponent
} from './generalinfo/generalinfo-list/generalinfo-list.component';
import {
  GeneralinfoDetailWidgetInfoComponent
} from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import {
  FaqListComponent
} from './faq/faq-list/faq-list.component';
import {
  EventListComponent
} from './event/event-list/event-list.component';
import {
  EventDetailWidgetPostComponent
} from './event/event-detail/event-detail-widget-post.component';
import {
  KeynoteListComponent
} from './keynote/keynote-list/keynote-list.component';
import {
  KeynoteDetailWidgetSlideComponent
} from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import {
  ArticleListComponent
} from './article/article-list/article-list.component';
import {
  ArticleDetailWidgetPostComponent
} from './article/article-detail/article-detail-widget-post.component';
import {
  PageListComponent
} from './page/page-list/page-list.component';
import {
  PageDetailWidgetPageComponent
} from './page/page-detail/page-detail-widget-page.component';
import {
  AlertListComponent
} from './alert/alert-list/alert-list.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const generalinfoRoutingCorePath = [{
  path: 'list',
  component: GeneralinfoListComponent
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
  component: FaqListComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const eventRoutingCorePath = [{
  path: 'list',
  component: EventListComponent
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
  component: KeynoteListComponent
}, {
  path: 'detail/:id',
  component: KeynoteDetailWidgetSlideComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const articleRoutingCorePath = [{
  path: 'list',
  component: ArticleListComponent
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
  component: PageListComponent
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
  component: AlertListComponent
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];