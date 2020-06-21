import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FileUploadModule } from '@hicoder/angular-file';
import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { TeachforlifeRoutingCoreModule } from './teachforlife-routing.core.module';
import { TeachforlifeComponent } from './teachforlife.component';
import { TeachforlifeRefSelectDirective } from './teachforlife.component';

// Import components for each schema
import { TutorListComponent } from './tutor/tutor-list/tutor-list.component';
import { TutorDetailComponent } from './tutor/tutor-detail/tutor-detail.component';
import { TutorDetailFieldComponent } from './tutor/tutor-detail/tutor-detail-field.component';
import { EnrollmentEditComponent } from './enrollment/enrollment-edit/enrollment-edit.component';
import { TutorListSelectComponent } from './tutor/tutor-list/tutor-list-select.component';
import { TutorDetailPopComponent } from './tutor/tutor-detail/tutor-detail-pop.component';
import { TutorDetailSelComponent } from './tutor/tutor-detail/tutor-detail-sel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,
    TeachforlifeRoutingCoreModule,
  ],
  declarations: [
    TeachforlifeComponent,
    TeachforlifeRefSelectDirective,
    TutorListComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    EnrollmentEditComponent,
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    
    
  ],
  exports: [
    TeachforlifeComponent,
    TutorListComponent,
    TutorDetailComponent,
    TutorDetailFieldComponent,
    EnrollmentEditComponent,
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
  ],
  providers: [
  ],
  entryComponents: [
    TutorListSelectComponent,
    TutorDetailPopComponent,
    TutorDetailSelComponent,
    EnrollmentEditComponent,
  ]
})
export class TeachforlifeCoreModule { }
