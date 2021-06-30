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
  MpermissionListComponent
} from './mpermission-list.component';
import {
  MpermissionService
} from '../mpermission.service';
@Component({
  selector: 'app-mpermission-list-sub',
  templateUrl: './mpermission-list-sub.component.html',
  styleUrls: ['./mpermission-list.component.css', './mpermission-list-sub.component.css']
})
export class MpermissionListSubComponent extends MpermissionListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  public parentSchema;
  public parentItemId;
  constructor(public mpermissionService: MpermissionService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpermissionService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    this.queryOnNgInit = false; // don't do query on the super class.
    super.ngOnInit();
    this.listCategory1 = {}; // no do query based on category;
    this.listCategory2 = {}; // no do query based on category;
    let ref = this.getParentRouteRefField();
    this.parentSchema = this.referenceFieldsReverseMap[ref];
    this.parentItemId = this.getParentRouteItemId();
    let id = this.parentItemId;
    // this is to initialize the detail that will be used for search condition selection
    this.parentData = {};
    if (this.arrayFields.some(x => x[0] == ref)) {
      this.parentData[ref] = {
        'selection': [{
          '_id': id
        }]
      };
      this.detail[ref] = {
        'selection': [{
          '_id': id
        }]
      }; //search on array list
    } else {
      this.parentData[ref] = {
        '_id': id
      };
      this.detail[ref] = {
        '_id': id
      }; //make this as the search context
    }
    this.searchList();
  }
}