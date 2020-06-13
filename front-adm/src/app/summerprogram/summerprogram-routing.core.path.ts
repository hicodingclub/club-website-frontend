// Import components for each schema

import { SpenrollmentListComponent } from './spenrollment/spenrollment-list/spenrollment-list.component';

import { SpenrollmentDetailComponent } from './spenrollment/spenrollment-detail/spenrollment-detail.component';

import { SpenrollmentEditComponent } from './spenrollment/spenrollment-edit/spenrollment-edit.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const spenrollmentRoutingCorePath = [
    {path: 'list', component: SpenrollmentListComponent, canActivate: [AuthGuard]},
    {path: 'detail/:id', component: SpenrollmentDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: SpenrollmentEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: SpenrollmentEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

