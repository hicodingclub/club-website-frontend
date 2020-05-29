import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TeachforlifeCoreModule } from '../teachforlife/teachforlife.core.module';

import { Teach4lifeComponent } from './cust/teach4life.component';

import { EnrollComponent } from './cust/enroll/enroll.component';
import { SignUpComponent } from './cust/enroll/sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    TeachforlifeCoreModule,
  ],
  declarations: [
    Teach4lifeComponent,
    EnrollComponent,
    SignUpComponent,
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
**Date: Fri May 29 2020 11:06:45 GMT-0700 (Pacific Daylight Time)

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
**** End of recent updates.<<<*/