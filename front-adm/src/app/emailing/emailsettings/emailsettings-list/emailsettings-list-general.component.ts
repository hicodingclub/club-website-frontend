import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  EmailsettingsListComponent
} from './emailsettings-list.component';
import {
  EmailsettingsService
} from '../emailsettings.service';
@Component({
  selector: 'app-emailsettings-list-general',
  templateUrl: './emailsettings-list-general.component.html',
  styleUrls: ['./emailsettings-list.component.css', './emailsettings-list-general.component.css']
})
export class EmailsettingsListGeneralComponent extends EmailsettingsListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public emailsettingsService: EmailsettingsService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailsettingsService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}