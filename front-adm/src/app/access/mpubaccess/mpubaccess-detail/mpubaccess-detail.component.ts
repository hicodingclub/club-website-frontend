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
  MpubaccessDetailCustComponent
} from '../../../access-cust/base/mpubaccess/mpubaccess-detail.cust.component';
import {
  ViewType
} from '../mpubaccess.component';
import {
  MpubaccessService
} from '../mpubaccess.service';
@Component({
  selector: 'app-mpubaccess-detail',
  templateUrl: './mpubaccess-detail.component.html',
  styleUrls: ['./mpubaccess-detail.component.css']
})
export class MpubaccessDetailComponent extends MpubaccessDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public mpubaccessService: MpubaccessService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubaccessService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'group': 'Group',
      'module': 'Module',
      'modulePermission': 'Module Permission',
      'resourcePermission': 'Resource Permission',
    };
    this.stringFields = ['modulePermission', ];
    this.referenceFields = ['group', 'module', ];
    this.mapFields = [
      ['resourcePermission', 'SchemaString', '', '', , ''],
    ];
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