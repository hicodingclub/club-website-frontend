import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import {
  MDDS_NGB_DATE_FORMAT,
  MraNgbDateFormatterService
} from '@hicoder/angular-core';

import { FilesModule } from '@hicoder/angular-file';

import { ActionEmailModule } from '@hicoder/angular-action-email';

import { MddsCoreModule } from '@hicoder/angular-core';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';


import { Users_SERVER_ROOT_URI } from './users.tokens';
import { users_server_root_uri } from '../users.conf';

// Import components for each schema

import { MuserListComponent } from './muser/muser-list/muser-list.component';

import { MuserDetailComponent } from './muser/muser-detail/muser-detail.component';

import { MuserDetailFieldComponent } from './muser/muser-detail/muser-detail-field.component';
import { MuserEditComponent } from './muser/muser-edit/muser-edit.component';

import { MuserService } from './muser/muser.service';

import { MuserPassComponent } from './muser/muser-edit/muser-pass.component';
import { PassswordEqualValidator } from './muser/muser-edit/muser-pass.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    MddsCoreModule,
    FilesModule,
    ActionEmailModule,

    UsersRoutingModule
  ],
  declarations: [
    UsersComponent,
    

    MuserListComponent,

    MuserDetailComponent,

    MuserDetailFieldComponent,
    MuserEditComponent,


    MuserPassComponent,
    PassswordEqualValidator,



  ],
  exports: [
    UsersComponent,

    MuserListComponent,

    MuserDetailComponent,

    MuserDetailFieldComponent,
    MuserEditComponent,



  ],
  providers: [
    { provide: Users_SERVER_ROOT_URI, useValue: users_server_root_uri },
    {
      provide: MDDS_NGB_DATE_FORMAT,
      useValue: 'MM-DD-YYYY'
    }, {
      provide: NgbDateParserFormatter,
      useClass: MraNgbDateFormatterService
    },
    MuserService,
  ],
  entryComponents: [
    MuserEditComponent,
  ]
})
export class UsersModule { }
