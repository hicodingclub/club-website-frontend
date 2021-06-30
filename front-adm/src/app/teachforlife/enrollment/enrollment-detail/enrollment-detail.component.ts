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
  EnrollmentDetailCustComponent
} from '../../../teachforlife-cust/base/enrollment/enrollment-detail.cust.component';
import {
  ViewType
} from '../enrollment.component';
import {
  EnrollmentService
} from '../enrollment.service';
@Component({
  selector: 'app-enrollment-detail',
  templateUrl: './enrollment-detail.component.html',
  styleUrls: ['./enrollment-detail.component.css']
})
export class EnrollmentDetailComponent extends EnrollmentDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public enrollmentService: EnrollmentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(enrollmentService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'email': 'Email',
      'phoneNumber': 'Phone Number',
      'grade': 'Grade',
      'status': 'Status',
      'notes': 'Notes',
      'adminNotes': 'Admin Notes',
      'tutor': 'Tutor',
      'createdAt': 'Created at',
    };
    this.enums['status'] = ['processing', 'paid', 'confirmed', 'cancelled', ];
    this.stringFields = ['name', 'email', 'phoneNumber', 'status', 'notes', 'adminNotes', ];
    this.referenceFields = ['tutor', ];
    this.dateFields = ['createdAt', ];
    this.numberFields = ['grade', ];
    this.textareaFields = ['notes', 'adminNotes', ];
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