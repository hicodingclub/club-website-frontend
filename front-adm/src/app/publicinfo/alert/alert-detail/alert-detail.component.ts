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
  AlertDetailCustComponent
} from '../../../publicinfo-cust/base/alert/alert-detail.cust.component';
import {
  ViewType
} from '../alert.component';
import {
  AlertService
} from '../alert.service';
@Component({
  selector: 'app-alert-detail',
  templateUrl: './alert-detail.component.html',
  styleUrls: ['./alert-detail.component.css']
})
export class AlertDetailComponent extends AlertDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public alertService: AlertService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(alertService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'description': 'Description',
      'linkName': 'Link Name',
      'linkURL': 'Link Url',
      'show': 'Show',
      'order': 'Order',
    };
    this.stringFields = ['name', 'description', 'linkName', 'linkURL', ];
    this.numberFields = ['order', ];
    this.textareaFields = ['description', ];
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