import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { SpenrollmentDetailCustComponent } from '../../../summerprogram-cust/base/spenrollment/spenrollment-detail.cust.component';
import { ViewType } from '../spenrollment.component';
import { SpenrollmentService } from '../spenrollment.service';




@Component({
  selector: 'app-spenrollment-detail',
  templateUrl: './spenrollment-detail.component.html',
  styleUrls: ['./spenrollment-detail.component.css']
})
export class SpenrollmentDetailComponent extends SpenrollmentDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public spenrollmentService: SpenrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                spenrollmentService, injector, router, route, location, ViewType.DETAIL);

          this.fieldDisplayNames = {
            'name': 'Name',
            'email': 'Email',
            'phoneNumber': 'Phone Number',
            'grade': 'Grade',
            'status': 'Status',
            'notes': 'Notes',
            'adminNotes': 'Admin Notes',
            'createdAt': 'Created at',
          };
          this.enums['status'] = ['processing', 'paid', 'confirmed', 'cancelled', ];
          this.stringFields.push('name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('status');
          this.stringFields.push('notes');
          this.stringFields.push('adminNotes');
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

  ngAfterViewInit() {

  }
}
