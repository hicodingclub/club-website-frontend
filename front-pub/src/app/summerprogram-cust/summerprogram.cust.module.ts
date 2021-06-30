import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MddsCoreModule } from '@hicoder/angular-core';

import { SummerprogramCoreModule } from '../summerprogram/summerprogram.core.module';

import { SummerProgramHomeComponent } from './cust/summerProgramHome.component';

import { SPEnrollComponent } from './cust/enroll/spenroll.component';
import { SPSignUpComponent } from './cust/enroll/spsign-up.component';
import { SPConformationComponent } from './cust/sp-confirmation/sp-confirmation.component';

import { PublicinfoModule } from '../publicinfo/publicinfo.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SummerprogramCoreModule,
    PublicinfoModule,
    MddsCoreModule,
  ],
  declarations: [
    SummerProgramHomeComponent,
    SPEnrollComponent,
    SPSignUpComponent,
    SPConformationComponent,
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class SummerprogramCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 30 2021 14:20:11 GMT-0700 (Pacific Daylight Time)

import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule
} from '@angular/forms';
import {
  SummerprogramCoreModule
} from '../summerprogram/summerprogram.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SummerprogramCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class SummerprogramCustModule {}**** End of recent updates.<<<*/
