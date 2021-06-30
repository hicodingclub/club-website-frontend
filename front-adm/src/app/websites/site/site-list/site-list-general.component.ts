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
  SiteListComponent
} from './site-list.component';
import {
  SiteService
} from '../site.service';
@Component({
  selector: 'app-site-list-general',
  templateUrl: './site-list-general.component.html',
  styleUrls: ['./site-list.component.css', './site-list-general.component.css']
})
export class SiteListGeneralComponent extends SiteListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public siteService: SiteService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(siteService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}