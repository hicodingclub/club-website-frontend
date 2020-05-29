import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { AlertListCustComponent } from '../../../publicinfo-cust/base/alert/alert-list.cust.component';
import { ViewType } from '../alert.component';
import { AlertService } from '../alert.service';



  
@Component({
  selector: 'app-alert-list',
  templateUrl: './alert-list.component.html',
  styleUrls: ['./alert-list.component.css']
})
export class AlertListComponent extends AlertListCustComponent implements OnInit {


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
  

  constructor(
      
      public alertService: AlertService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                alertService, injector, router, route, location, ViewType.LIST);

          this.fieldDisplayNames = {
            'name': 'Name',
            'description': 'Description',
            'linkName': 'Link Name',
            'linkURL': 'Link U R L',
            'show': 'Show',
            'order': 'Order',
          };


          this.stringFields.push('name');
          this.stringFields.push('description');
          this.stringFields.push('linkName');
          this.stringFields.push('linkURL');



          this.numberFields = ['order', ];





          this.textareaFields = ['description', ];



          this.listViewFilter = 'list';
          this.setListSort('order', 'Order', 'asc');

          const listCategories = [];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};
  }

  ngOnInit() {
      super.ngOnInit();

      this.adjustListViewForWindowSize();

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
    return new AlertListComponent(null, null, null, null, null);
  }
}
