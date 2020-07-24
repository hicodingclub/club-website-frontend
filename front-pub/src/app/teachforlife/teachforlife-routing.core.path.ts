// Import components for each schema
import {
  TutorListComponent
} from './tutor/tutor-list/tutor-list.component';
import {
  TutorDetailComponent
} from './tutor/tutor-detail/tutor-detail.component';
import {
  EnrollmentEditComponent
} from './enrollment/enrollment-edit/enrollment-edit.component';
import {
  AuthGuard
} from '@hicoder/angular-auth';
const tutorDetailPath = [];
export const tutorRoutingCorePath = [{
  path: 'list',
  component: TutorListComponent
}, {
  path: 'detail/:id',
  component: TutorDetailComponent,
  children: tutorDetailPath
}, {
  path: '**',
  redirectTo: 'list',
  pathMatch: 'full'
}];
export const enrollmentRoutingCorePath = [{
  path: 'new',
  component: EnrollmentEditComponent,
  canActivate: [AuthGuard]
}, ];