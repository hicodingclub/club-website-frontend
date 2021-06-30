// Import components for each schema
import {
  TutorListGeneralComponent
} from './tutor/tutor-list/tutor-list-general.component';
import {
  TutorDetailComponent
} from './tutor/tutor-detail/tutor-detail.component';
import {
  TutorEditComponent
} from './tutor/tutor-edit/tutor-edit.component';
import {
  EnrollmentListGeneralComponent
} from './enrollment/enrollment-list/enrollment-list-general.component';
import {
  EnrollmentDetailComponent
} from './enrollment/enrollment-detail/enrollment-detail.component';
import {
  EnrollmentEditComponent
} from './enrollment/enrollment-edit/enrollment-edit.component';
import {
  EnrollmentListSubComponent
} from './enrollment/enrollment-list/enrollment-list-sub.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const enrollmentSubPath = [{
  path: 'list',
  component: EnrollmentListSubComponent
}];
const tutorDetailPath = [{
  path: 'enrollment',
  children: enrollmentSubPath,
  data: {
    'mraLevel': 2,
    'item': 'enrollment'
  }
}, ];
export const tutorRoutingCorePath = [{
  path: 'list',
  component: TutorListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: TutorDetailComponent,
  children: tutorDetailPath,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: TutorEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: TutorEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const enrollmentRoutingCorePath = [{
  path: 'list',
  component: EnrollmentListGeneralComponent,
  canActivate: [AuthGuard]
}, {
  path: 'detail/:id',
  component: EnrollmentDetailComponent,
  canActivate: [AuthGuard]
}, {
  path: 'edit/:id',
  component: EnrollmentEditComponent,
  canActivate: [AuthGuard]
}, {
  path: 'new',
  component: EnrollmentEditComponent,
  canActivate: [AuthGuard]
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];