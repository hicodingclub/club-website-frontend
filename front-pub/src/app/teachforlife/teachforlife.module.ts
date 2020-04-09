import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';





import { FileUploadModule } from '@hicoder/angular-file';

import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { TeachforlifeRoutingModule } from './teachforlife-routing.module';
import { TeachforlifeComponent } from './teachforlife.component';


import { Teachforlife_SERVER_ROOT_URI } from './teachforlife.tokens';
import { teachforlife_server_root_uri } from '../teachforlife.conf';

// Import components for each schema

import { TutorListComponent } from './tutor/tutor-list/tutor-list.component';

import { TutorDetailComponent } from './tutor/tutor-detail/tutor-detail.component';

import { TutorDetailFieldComponent } from './tutor/tutor-detail/tutor-detail-field.component';


import { TutorService } from './tutor/tutor.service';





@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MddsCoreModule,
    FileUploadModule,
    ActionEmailModule,

    TeachforlifeRoutingModule
  ],
  declarations: [
    TeachforlifeComponent,
    

    TutorListComponent,

    TutorDetailComponent,

    TutorDetailFieldComponent,
    







  ],
  exports: [
    TeachforlifeComponent,

    TutorListComponent,

    TutorDetailComponent,

    TutorDetailFieldComponent,
    







  ],
  providers: [
    { provide: Teachforlife_SERVER_ROOT_URI, useValue: teachforlife_server_root_uri },


    TutorService,
  ],
  entryComponents: [
  ]
})
export class TeachforlifeModule { }