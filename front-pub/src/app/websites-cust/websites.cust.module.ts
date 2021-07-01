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

import { FilesModule } from '@hicoder/angular-file'
import {
  WebsitesCoreModule
} from '../websites/websites.core.module';

import {SiteUploadComponent} from './cust/site-upload.component';
import {MySitesComponent} from './cust/my-sites.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    FilesModule,
  
    WebsitesCoreModule,
  ],
  declarations: [
    SiteUploadComponent,
    MySitesComponent,
  ],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class WebsitesCustModule {}/*>>> Please check this recent updates and merge with existing ones***
**Date: Thu Jul 01 2021 02:43:59 GMT-0700 (Pacific Daylight Time)

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
  WebsitesCoreModule
} from '../websites/websites.core.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    WebsitesCoreModule,
  ],
  declarations: [],
  exports: [],
  providers: [],
  entryComponents: [],
})
export class WebsitesCustModule {}**** End of recent updates.<<<*/
