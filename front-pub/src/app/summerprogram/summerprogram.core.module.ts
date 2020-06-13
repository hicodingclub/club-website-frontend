import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';







import { MddsCoreModule } from '@hicoder/angular-core';

import { SummerprogramRoutingCoreModule } from './summerprogram-routing.core.module';
import { SummerprogramComponent } from './summerprogram.component';


import { Summerprogram_SERVER_ROOT_URI } from './summerprogram.tokens';
import { summerprogram_server_root_uri } from '../summerprogram-cust/summerprogram.conf';

// Import components for each schema






import { SpenrollmentEditComponent } from './spenrollment/spenrollment-edit/spenrollment-edit.component';

import { SpenrollmentService } from './spenrollment/spenrollment.service';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MddsCoreModule,


    SummerprogramRoutingCoreModule,
  ],
  declarations: [
    SummerprogramComponent,
    

    

    

    
    SpenrollmentEditComponent,







  ],
  exports: [
    SummerprogramComponent,

    

    

    
    SpenrollmentEditComponent,







  ],
  providers: [
    { provide: Summerprogram_SERVER_ROOT_URI, useValue: summerprogram_server_root_uri },


    SpenrollmentService,
  ],
  entryComponents: [
    SpenrollmentEditComponent,
  ]
})
export class SummerprogramCoreModule { }
