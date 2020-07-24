// Import components for each schema
import {
  SpenrollmentListComponent
} from './spenrollment/spenrollment-list/spenrollment-list.component';
import {
  SpenrollmentDetailComponent
} from './spenrollment/spenrollment-detail/spenrollment-detail.component';
import {
  SpenrollmentEditComponent
} from './spenrollment/spenrollment-edit/spenrollment-edit.component';
import {
  ConfirmationListComponent
} from './confirmation/confirmation-list/confirmation-list.component';
import {
  ConfirmationDetailComponent
} from './confirmation/confirmation-detail/confirmation-detail.component';
import {
  ConfirmationEditComponent
} from './confirmation/confirmation-edit/confirmation-edit.component';
import {
  ConfirmationListSubComponent
} from './confirmation/confirmation-list/confirmation-list-sub.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const confirmationSubPath = [{
  path: 'list',
  component: ConfirmationListSubComponent
}];
const spenrollmentDetailPath = [{
  path: 'confirmation',
  children: confirmationSubPath,
  data: {
    'mraLevel': 2,
    'item': 'confirmation'
  }
}, ];
export const spenrollmentRoutingCorePath = [{
  path: 'list',
  component: SpenrollmentListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: SpenrollmentDetailComponent,
  children: spenrollmentDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: SpenrollmentEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: SpenrollmentEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const confirmationRoutingCorePath = [{
  path: 'list',
  component: ConfirmationListComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: ConfirmationDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: ConfirmationEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: ConfirmationEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];