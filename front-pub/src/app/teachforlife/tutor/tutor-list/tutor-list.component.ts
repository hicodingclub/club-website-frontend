import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { TutorListCustComponent } from '../../../teachforlife-cust/base/tutor/tutor-list.cust.component';
import { ViewType } from '../tutor.component';
import { TutorService } from '../tutor.service';



  
@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent extends TutorListCustComponent implements OnInit {


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
      
      public tutorService: TutorService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                tutorService, injector, router, route, location);
          this.view = ViewType.LIST;

          this.fieldDisplayNames = {
            'name': 'Name',
            'introduction': 'Introduction',
            'photo': 'Photo',
            'specificSubjects': 'Tutoring Subjects',
            'subjectTags': 'Subject Tags',
          };
          this.stringFields.push('name');
          this.stringFields.push('introduction');
          this.stringFields.push('photo');
          this.stringFields.push('specificSubjects');
          this.arrayFields = [
            ['subjectTags', 'SchemaString'],
          ];
          this.textareaFields = [
            'introduction',
            'specificSubjects',
          ];

          this.listViewFilter = 'grid';

          const listCategories = [{"listCategoryField":"subjectTags"}];
          this.listCategory1 = listCategories[0] || {};
          this.listCategory2 = listCategories[1] || {};

          this.clickItemAction = 'detail';
          this.itemMultiSelect = true;
  }

  ngOnInit() {
      super.ngOnInit();

      this.adjustListViewForWindowSize();

      this.clickItemAction = typeof this.options.clickItemAction === 'undefined'? this.clickItemAction : this.options.clickItemAction;
      this.itemMultiSelect = typeof this.options.itemMultiSelect === 'boolean' ?  this.options.itemMultiSelect : this.itemMultiSelect;
  
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
    return new TutorListComponent(null, null, null, null, null);
  }
}

