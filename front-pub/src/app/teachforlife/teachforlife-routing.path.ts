// Import components for each schema

import { TutorListComponent } from './tutor/tutor-list/tutor-list.component';
import { TutorDetailComponent } from './tutor/tutor-detail/tutor-detail.component';





import { AuthGuard } from '@hicoder/angular-auth';




export const tutorRoutingPath = [
    {path: 'list', component: TutorListComponent},
     {path: 'detail/:id', component: TutorDetailComponent},
    
    
    
    {path: '**', redirectTo: 'list', pathMatch: 'full'}
];

