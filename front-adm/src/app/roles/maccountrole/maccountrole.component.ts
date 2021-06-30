import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  MddsBaseComponent,
  ViewType
} from '@hicoder/angular-core';
import {
  Component,
  OnInit,
  Injector,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import {
  MaccountroleService
} from './maccountrole.service';
const itemCamelName = 'account Role';
export {
  ViewType
};
import {
  ViewChild
} from '@angular/core';
import {
  RolesRefSelectDirective
} from '../roles.component';
import {
  MaccountDetailPopComponent
} from '../maccount/maccount-detail/maccount-detail-pop.component';
import {
  MaccountListSelectComponent
} from '../maccount/maccount-list/maccount-list-select.component';
import {
  MroleDetailPopComponent
} from '../mrole/mrole-detail/mrole-detail-pop.component';
import {
  MroleListSelectComponent
} from '../mrole/mrole-list/mrole-list-select.component';
@Component({
  template: '',
})
export class MaccountroleComponent extends MddsBaseComponent implements OnInit {
  // *** common input fields
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions
  @Input()
  public searchObj: any;
  @Input()
  public snackbarMessages: any = {}; // keys: edit, create, list, detail, delete, deleteMany TODO: archive, unarchive
  // *** list component
  @Input()
  public inputData: any;
  @Input()
  public queryParams: any; // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
  @Input()
  public categoryBy: string; //field name whose value is used as category
  @Input()
  public listViews: string[] = [];
  @Input()
  public viewInputs: any = {};
  // list-asso component
  @Input('asso') public associationField: string;
  // list select component
  @Output() outputData: any;
  // *** edit / create component
  @Input()
  public id: string;
  @Input()
  public cid: string; // copy id
  @Input()
  public initData: any; // some fields has data already. eg: {a: b}. Used for add
  @Input()
  public embeddedView: boolean;
  @Input()
  public embedMode: string; // parent to tell the action - create
  @Output()
  public doneData = new EventEmitter < boolean > ();
  @Output()
  public done = new EventEmitter < any > ();
  // *** detail component
  // @Input() 
  // public id:string;
  @Input()
  public disableActionButtons: boolean;
  @Output()
  public eventEmitter: EventEmitter < any > = new EventEmitter();
  @Input()
  public listRouterLink: string = '../../list'; // router link from detail to list
  // detail sub component
  // @Input() inputData;
  // detail show field component
  // @Input() id: string;
  @Input() detailObj: any;
  @Input() showFieldsStr: string;
  // detail sel component
  //@Input() inputData;
  //@Output() outputData;
  // detail pop component
  // @Input() inputData;
  // @Output() outputData;
  public selectComponents = {
    'account': {
      'select-type': MaccountListSelectComponent,
      'pop-detail-type': MaccountDetailPopComponent,
      'componentRef': null
    },
    'role': {
      'select-type': MroleListSelectComponent,
      'pop-detail-type': MroleDetailPopComponent,
      'componentRef': null
    },
  }
  @ViewChild(RolesRefSelectDirective, {
    static: true
  }) refSelectDirective: RolesRefSelectDirective;
  constructor(public maccountroleService: MaccountroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountroleService, injector, router, route, location);
    this.setItemNames(itemCamelName);
    this.briefFieldsInfo = [
      ['account', 'Account'],
      ['role', 'Role'],
    ];
    this.referenceFieldsMap = {
      'account': 'maccount',
      'role': 'mrole',
    };
    this.referenceFieldsReverseMap = {
      'maccount': 'account',
      'mrole': 'role',
    };
    this.requiredFields = ['account', ];
    this.schemaName = 'maccountrole';
    this.modulePath = 'roles';
    this.indexFields = ['account', ];
  }
  ngOnInit() {
    this.style = this.style || {};
    this.options = this.options || {};
  }
}