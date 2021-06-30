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
  MmoduleListComponent
} from './mmodule-list.component';
import {
  MmoduleService
} from '../mmodule.service';
@Component({
  selector: 'app-mmodule-list-general',
  templateUrl: './mmodule-list-general.component.html',
  styleUrls: ['./mmodule-list.component.css', './mmodule-list-general.component.css']
})
export class MmoduleListGeneralComponent extends MmoduleListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public mmoduleService: MmoduleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mmoduleService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}