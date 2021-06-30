// Import components for each schema
import {
  EmailtemplateListGeneralComponent
} from './emailtemplate/emailtemplate-list/emailtemplate-list-general.component';
import {
  EmailtemplateDetailComponent
} from './emailtemplate/emailtemplate-detail/emailtemplate-detail.component';
import {
  EmailtemplateEditComponent
} from './emailtemplate/emailtemplate-edit/emailtemplate-edit.component';
import {
  EmailsettingsListGeneralComponent
} from './emailsettings/emailsettings-list/emailsettings-list-general.component';
import {
  EmailsettingsDetailComponent
} from './emailsettings/emailsettings-detail/emailsettings-detail.component';
import {
  EmailsettingsEditComponent
} from './emailsettings/emailsettings-edit/emailsettings-edit.component';
import {
  EmailqueueListGeneralComponent
} from './emailqueue/emailqueue-list/emailqueue-list-general.component';
import {
  EmailqueueDetailComponent
} from './emailqueue/emailqueue-detail/emailqueue-detail.component';
import {
  EmailqueueEditComponent
} from './emailqueue/emailqueue-edit/emailqueue-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
export const emailtemplateRoutingCorePath = [{
  path: 'list',
  component: EmailtemplateListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: EmailtemplateDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: EmailtemplateEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: EmailtemplateEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const emailsettingsRoutingCorePath = [{
  path: 'list',
  component: EmailsettingsListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: EmailsettingsDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: EmailsettingsEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const emailqueueRoutingCorePath = [{
  path: 'list',
  component: EmailqueueListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: EmailqueueDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: EmailqueueEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];