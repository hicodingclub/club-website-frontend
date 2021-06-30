// Import components for each schema
import {
  SiteListGeneralComponent
} from './site/site-list/site-list-general.component';
import {
  SiteDetailComponent
} from './site/site-detail/site-detail.component';
import {
  SiteEditComponent
} from './site/site-edit/site-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const siteRoutingCorePath = [{
  path: 'list',
  component: SiteListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: SiteDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: SiteEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: SiteEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];