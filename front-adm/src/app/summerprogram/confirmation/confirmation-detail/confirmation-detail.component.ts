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
  ConfirmationDetailCustComponent
} from '../../../summerprogram-cust/base/confirmation/confirmation-detail.cust.component';
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
  selector: 'app-confirmation-detail',
  templateUrl: './confirmation-detail.component.html',
  styleUrls: ['./confirmation-detail.component.css']
})
export class ConfirmationDetailComponent extends ConfirmationDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public componentFactoryResolver: ComponentFactoryResolver, public confirmationService: ConfirmationService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(componentFactoryResolver, confirmationService, injector, router, route, location);
    this.view = ViewType.DETAIL;
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