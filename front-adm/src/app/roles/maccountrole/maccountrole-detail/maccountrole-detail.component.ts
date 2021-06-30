import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
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
  MaccountroleDetailCustComponent
} from '../../../roles-cust/base/maccountrole/maccountrole-detail.cust.component';
import {
  ViewType
} from '../maccountrole.component';
import {
  MaccountroleService
} from '../maccountrole.service';
@Component({
  selector: 'app-maccountrole-detail',
  templateUrl: './maccountrole-detail.component.html',
  styleUrls: ['./maccountrole-detail.component.css']
})
export class MaccountroleDetailComponent extends MaccountroleDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public maccountroleService: MaccountroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountroleService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'account': 'Account',
      'role': 'Role',
    };
    this.referenceFields = ['account', ];
    this.arrayFields = [
      ['role', 'ObjectId', {
        "mraType": "",
        "urlDisplay": ""
      }, ],
    ];
    this.referenceFieldsMap['role'] = 'mrole';
    this.referenceFieldsReverseMap['mrole'] = 'role';
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.populateDetail(this.id);
    } else if (this.searchObj) {
      // search item based on the unique value
      this.populateDetailByFields(this.searchObj);
    } else {
      console.error("Routing error for detail view... no id...");
      return;
    }
  }
  ngAfterViewInit() {}
}