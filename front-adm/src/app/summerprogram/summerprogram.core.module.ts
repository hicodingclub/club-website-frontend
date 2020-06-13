import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './summerprogram.directive';





import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { SummerprogramRoutingCoreModule } from './summerprogram-routing.core.module';
import { SummerprogramComponent } from './summerprogram.component';


import { Summerprogram_SERVER_ROOT_URI } from './summerprogram.tokens';
import { summerprogram_server_root_uri } from '../summerprogram-cust/summerprogram.conf';

// Import components for each schema

import { SpenrollmentListComponent } from './spenrollment/spenrollment-list/spenrollment-list.component';

import { SpenrollmentDetailComponent } from './spenrollment/spenrollment-detail/spenrollment-detail.component';

import { SpenrollmentDetailFieldComponent } from './spenrollment/spenrollment-detail/spenrollment-detail-field.component';
import { SpenrollmentEditComponent } from './spenrollment/spenrollment-edit/spenrollment-edit.component';

import { SpenrollmentService } from './spenrollment/spenrollment.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    ActionEmailModule,


    SummerprogramRoutingCoreModule,
  ],
  declarations: [
    SummerprogramComponent,
    

    SpenrollmentListComponent,

    SpenrollmentDetailComponent,

    SpenrollmentDetailFieldComponent,
    SpenrollmentEditComponent,







  ],
  exports: [
    SummerprogramComponent,

    SpenrollmentListComponent,

    SpenrollmentDetailComponent,

    SpenrollmentDetailFieldComponent,
    SpenrollmentEditComponent,







  ],
  providers: [
    { provide: Summerprogram_SERVER_ROOT_URI, useValue: summerprogram_server_root_uri },

    {provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService},

    SpenrollmentService,
  ],
  entryComponents: [
    SpenrollmentEditComponent,
  ]
})
export class SummerprogramCoreModule { }
