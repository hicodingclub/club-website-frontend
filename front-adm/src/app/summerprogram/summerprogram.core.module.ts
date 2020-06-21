import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { MraNgbDateFormatterService } from './summerprogram.directive';
import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { SummerprogramRoutingCoreModule } from './summerprogram-routing.core.module';
import { SummerprogramComponent } from './summerprogram.component';

// Import components for each schema
import { SpenrollmentListComponent } from './spenrollment/spenrollment-list/spenrollment-list.component';
import { SpenrollmentDetailComponent } from './spenrollment/spenrollment-detail/spenrollment-detail.component';
import { SpenrollmentDetailFieldComponent } from './spenrollment/spenrollment-detail/spenrollment-detail-field.component';
import { SpenrollmentEditComponent } from './spenrollment/spenrollment-edit/spenrollment-edit.component';

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
    { provide: NgbDateParserFormatter, useClass: MraNgbDateFormatterService },
  ],
  entryComponents: [
    SpenrollmentEditComponent,
  ]
})
export class SummerprogramCoreModule { }
