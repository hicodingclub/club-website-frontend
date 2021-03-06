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
  ConfirmationListCustComponent
} from '../../../summerprogram-cust/base/confirmation/confirmation-list.cust.component';
import {
  ViewType
} from '../confirmation.component';
import {
  ConfirmationService
} from '../confirmation.service';
import {
  ComponentFactoryResolver
} from '@angular/core';
@Component({
  selector: 'app-confirmation-list',
  templateUrl: './confirmation-list.component.html',
  styleUrls: ['./confirmation-list.component.css']
})
export class ConfirmationListComponent extends ConfirmationListCustComponent implements OnInit {
  public minDate = {
    year: (new Date()).getFullYear() - 100,
    month: 1,
    day: 1
  };
  // @Input() options: any; {disableCatetory: false, disablePagination: false, disbleActionButtons: false
  //                        disableListSearch: false, disableTitle: false, disableRefs: false
  //                        disableListHead: false, disableTitleRow: false}
  // @Input()
  // public inputData:any;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  // @Input()
  // public categoryBy:string; //field name whose value is used as category
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public confirmationService: ConfirmationService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(componentFactoryResolver, confirmationService, injector, router, route, location);
    this.view = ViewType.LIST;
    this.fieldDisplayNames = {
      'name': 'Name',
      'email': 'Email',
      'type': 'Type',
      'enrollment': 'Enrollment',
      'confirmed': 'Confirmed',
      'createdAt': 'Created at',
    };
    this.stringFields.push('name');
    this.stringFields.push('email');
    this.stringFields.push('type');
    this.referenceFields = ['enrollment', ];
    this.dateFields = ['createdAt', ];
    this.numberFields = ['confirmed', ];
    this.ownSearchStringFields = ['type', ];
    this.listViewFilter = 'table';
    this.setListSort('createdAt', 'Created at', 'desc');
    const listCategories = [];
    this.listCategory1 = listCategories[0] || {};
    this.listCategory2 = listCategories[1] || {};
    this.clickItemAction = 'detail';
    this.itemMultiSelect = true;
    // initialize detail structure for search
    let detail = {};
    this.detail = this.formatDetail(detail);
  }
  ngOnInit() {
    super.ngOnInit();
    this.adjustListViewForWindowSize();
    this.clickItemAction = typeof this.options.clickItemAction === 'undefined' ? this.clickItemAction : this.options.clickItemAction;
    this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ? this.options.itemMultiSelect : this.itemMultiSelect;
    if (!this.options) {
      this.options = {};
    }
    if (this.options.disableCatetory) {
      this.listCategory1 = {}; // no do query based on category for home view;
      this.listCategory2 = {}; // no do query based on category for home view;
    }
    // this is to initialize the detail that will be used for search condition selection
    let detail = {};
    if (this.searchObj) {
      this.searchDetailReady = true; // search provided from "detail", not from search bar.
      detail = this.searchObj;
    }
    if (this.queryParams) {
      this.listSortField = this.queryParams.listSortField;
      this.listSortOrder = this.queryParams.listSortOrder;
      if (this.queryParams.perPage) {
        this.perPage = this.queryParams.perPage
      }
    }
    this.detail = this.formatDetail(detail);
    this.searchList();
    // get editHintFields
    this.searchHintFieldValues();
  }
  static getInstance() {
    //used by others to call some common functions
    return new ConfirmationListComponent(null, null, null, null, null, null);
  }
}