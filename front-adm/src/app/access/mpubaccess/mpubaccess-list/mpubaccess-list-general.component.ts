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
  MpubaccessListComponent
} from './mpubaccess-list.component';
import {
  MpubaccessService
} from '../mpubaccess.service';
@Component({
  selector: 'app-mpubaccess-list-general',
  templateUrl: './mpubaccess-list-general.component.html',
  styleUrls: ['./mpubaccess-list.component.css', './mpubaccess-list-general.component.css']
})
export class MpubaccessListGeneralComponent extends MpubaccessListComponent implements OnInit {
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
  constructor(public mpubaccessService: MpubaccessService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubaccessService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}