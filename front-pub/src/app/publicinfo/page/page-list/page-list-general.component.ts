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
  PageListComponent
} from './page-list.component';
import {
  PageService
} from '../page.service';
@Component({
  selector: 'app-page-list-general',
  templateUrl: './page-list-general.component.html',
  styleUrls: ['./page-list.component.css', './page-list-general.component.css']
})
export class PageListGeneralComponent extends PageListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public pageService: PageService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(pageService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}