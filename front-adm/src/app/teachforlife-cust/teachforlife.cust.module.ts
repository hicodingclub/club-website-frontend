import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TeachforlifeCoreModule } from '../teachforlife/teachforlife.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  
    TeachforlifeCoreModule,
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
export class TeachforlifeCustModule { }
/*>>> Please check this recent updates and merge with existing ones***
**Date: Fri Jun 12 2020 17:09:28 GMT-0700 (Pacific Daylight Time)

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TeachforlifeCoreModule } from '../teachforlife/teachforlife.core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    TeachforlifeCoreModule,
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
export class TeachforlifeCustModule { }
**** End of recent updates.<<<*/
