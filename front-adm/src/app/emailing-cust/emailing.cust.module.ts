import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmailingCoreModule } from '../emailing/emailing.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    EmailingCoreModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
  ],
  entryComponents: [
  ],
})
export class EmailingCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Wed Jun 30 2021 10:23:32 GMT-0700 (Pacific Daylight Time)

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
  EmailingCoreModule
} from '../emailing/emailing.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    EmailingCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class EmailingCustModule {}**** End of recent updates.<<<*/
