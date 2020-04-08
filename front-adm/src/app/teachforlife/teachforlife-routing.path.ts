// Import components for each schema

import { TutorListComponent } from './tutor/tutor-list/tutor-list.component';
import { TutorDetailComponent } from './tutor/tutor-detail/tutor-detail.component';

import { TutorEditComponent } from './tutor/tutor-edit/tutor-edit.component';



import { AuthGuard } from '@hicoder/angular-auth';




export const tutorRoutingPath = [
    {path: 'list', component: TutorListComponent, canActivate: [AuthGuard]},
     {path: 'detail/:id', component: TutorDetailComponent, canActivate: [AuthGuard]},
    {path: 'edit/:id', component: TutorEditComponent, canActivate: [AuthGuard]},
    {path: 'new', component: TutorEditComponent, canActivate: [AuthGuard]},
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

