// Import components for each schema
import {
  EventListGeneralComponent
} from './event/event-list/event-list-general.component';
import {
  EventDetailWidgetPostComponent
} from './event/event-detail/event-detail-widget-post.component';
import {
  EventEditComponent
} from './event/event-edit/event-edit.component';
import {
  ArticleListGeneralComponent
} from './article/article-list/article-list-general.component';
import {
  ArticleDetailWidgetPostComponent
} from './article/article-detail/article-detail-widget-post.component';
import {
  ArticleEditComponent
} from './article/article-edit/article-edit.component';
import {
  FaqListGeneralComponent
} from './faq/faq-list/faq-list-general.component';
import {
  FaqDetailComponent
} from './faq/faq-detail/faq-detail.component';
import {
  FaqEditComponent
} from './faq/faq-edit/faq-edit.component';
import {
  GeneralinfoListGeneralComponent
} from './generalinfo/generalinfo-list/generalinfo-list-general.component';
import {
  GeneralinfoDetailWidgetInfoComponent
} from './generalinfo/generalinfo-detail/generalinfo-detail-widget-info.component';
import {
  GeneralinfoEditComponent
} from './generalinfo/generalinfo-edit/generalinfo-edit.component';
import {
  KeynoteListGeneralComponent
} from './keynote/keynote-list/keynote-list-general.component';
import {
  KeynoteDetailWidgetSlideComponent
} from './keynote/keynote-detail/keynote-detail-widget-slide.component';
import {
  KeynoteEditComponent
} from './keynote/keynote-edit/keynote-edit.component';
import {
  PageListGeneralComponent
} from './page/page-list/page-list-general.component';
import {
  PageDetailWidgetPageComponent
} from './page/page-detail/page-detail-widget-page.component';
import {
  PageEditComponent
} from './page/page-edit/page-edit.component';
import {
  AlertListGeneralComponent
} from './alert/alert-list/alert-list-general.component';
import {
  AlertDetailComponent
} from './alert/alert-detail/alert-detail.component';
import {
  AlertEditComponent
} from './alert/alert-edit/alert-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const eventRoutingCorePath = [{
  path: 'list',
  component: EventListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: EventDetailWidgetPostComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: EventEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: EventEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const articleRoutingCorePath = [{
  path: 'list',
  component: ArticleListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: ArticleDetailWidgetPostComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: ArticleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: ArticleEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const faqRoutingCorePath = [{
  path: 'list',
  component: FaqListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: FaqDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: FaqEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: FaqEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const generalinfoRoutingCorePath = [{
  path: 'list',
  component: GeneralinfoListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: GeneralinfoDetailWidgetInfoComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: GeneralinfoEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: GeneralinfoEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const keynoteRoutingCorePath = [{
  path: 'list',
  component: KeynoteListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: KeynoteDetailWidgetSlideComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: KeynoteEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: KeynoteEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const pageRoutingCorePath = [{
  path: 'list',
  component: PageListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: PageDetailWidgetPageComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: PageEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: PageEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const alertRoutingCorePath = [{
  path: 'list',
  component: AlertListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: AlertDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: AlertEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: AlertEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];