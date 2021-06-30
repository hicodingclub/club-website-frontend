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
  AlertListComponent
} from './alert-list.component';
import {
  AlertService
} from '../alert.service';
@Component({
  selector: 'app-alert-list-general',
  templateUrl: './alert-list-general.component.html',
  styleUrls: ['./alert-list.component.css', './alert-list-general.component.css']
})
export class AlertListGeneralComponent extends AlertListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public alertService: AlertService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(alertService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}