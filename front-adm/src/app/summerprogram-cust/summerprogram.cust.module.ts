import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { SummerprogramCoreModule } from '../summerprogram/summerprogram.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SummerprogramCoreModule,
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
export class SummerprogramCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Sat Jun 20 2020 19:57:56 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SummerprogramCoreModule } from '../summerprogram/summerprogram.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    SummerprogramCoreModule,
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
export class SummerprogramCustModule { }
**** End of recent updates.<<<*/
