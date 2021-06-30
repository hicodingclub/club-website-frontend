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
export class WebsitesCustModule {}