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
  TutorListCustComponent
} from '../../../teachforlife-cust/base/tutor/tutor-list.cust.component';
import {
  ViewType
} from '../tutor.component';
import {
  TutorService
} from '../tutor.service';
@Component({
  template: '',
})
export class TutorListComponent extends TutorListCustComponent implements OnInit {
  public listViewProperties: any = {
    list: {
      mobile: true
    },
    grid: {
      mobile: true
    },
    table: {
      mobile: false
    }
  };
  // used by association widget for the associated schema
  public assoCompInstance: any;
  public assoCompFields: any = [];
  public assoCompObjects: any = [];
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = false;
  // Do query on NgInit in this base class
  public queryOnNgInit: boolean = true;
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
  constructor(public tutorService: TutorService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(tutorService, injector, router, route, location);
    this.view = ViewType.LIST;
    this.fieldDisplayNames = {
      'name': 'Name',
      'introduction': 'Introduction',
      'photo': 'Photo',
      'specificSubjects': 'Tutoring Subjects',
      'subjectTags': 'Subject Tags',
    };
    this.stringFields = ['name', 'introduction', 'photo', 'specificSubjects', ];
    this.arrayFields = [
      ['subjectTags', 'SchemaString', {
        "mraType": "",
        "urlDisplay": ""
      }, ],
    ];
    this.textareaFields = ['introduction', 'specificSubjects', ];
    this.stringBoxFields = ['name', 'introduction', 'specificSubjects', ];
    const listCategories = [{
      "listCategoryField": "subjectTags"
    }];
    this.listCategory1 = listCategories[0] || {};
    this.listCategory2 = listCategories[1] || {};
  }
  ngOnInit() {
    super.ngOnInit();
    this.adjustListViewForWindowSize();
    if (!this.options) {
      this.options = {};
    }
    const properties = ['clickItemAction', 'cardHasLink', 'cardHasSelect', 'includeSubDetail', 'canUpdate', 'canDelete', 'canArchive', 'canCheck', 'itemMultiSelect', 'majorUi', ];
    this.applyProperties(this.options, this, properties);
    if (this.options.disableCatetory) {
      this.listCategory1 = {}; // no do query based on category for home view;
      this.listCategory2 = {}; // no do query based on category for home view;
    }
    this.listViewFilter = this.options.listViewFilter || this.listViewFilter
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
    if (this.queryOnNgInit) {
      this.searchList();
      // get editHintFields
      this.searchHintFieldValues();
    }
  }
  viewUIEvent(evt: any) {
    const thisObject = this;
    thisObject[evt.type].apply(this, evt.params);
  }
  static getInstance() {
    //used by others to call some common functions
    return new TutorListComponent(null, null, null, null, null);
  }
}