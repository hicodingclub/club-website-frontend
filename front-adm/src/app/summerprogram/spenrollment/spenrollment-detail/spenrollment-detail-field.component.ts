import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { SpenrollmentComponent, ViewType } from '../spenrollment.component';
import { SpenrollmentService } from '../spenrollment.service';

@Component({
  selector: 'app-spenrollment-detail-field',
  templateUrl: './spenrollment-detail-field.component.html',
  styleUrls: ['./spenrollment-detail.component.css']
})
export class SpenrollmentDetailFieldComponent extends SpenrollmentComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public spenrollmentService: SpenrollmentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                spenrollmentService, injector, router, route, location);
          this.view = ViewType.DETAIL;
          
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
          this.enums['status'] = [
            'processing',
            'paid',
            'confirmed',
            'cancelled',
          ];
          this.stringFields.push('name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('status');
          this.stringFields.push('notes');
          this.stringFields.push('adminNotes');
          this.dateFields = [
            'createdAt',
          ];
          this.numberFields = [
            'grade',
          ];
          this.textareaFields = [
            'notes',
            'adminNotes',
          ];
    }

    ngOnInit() {
      if (!this.showFieldsStr) {
        console.error("A field has to be given to show it.");
        return;
      }
      this.showFields = this.showFieldsStr.match(/\S+/g);
      if (this.detailObj) {
        this.onDetailReturned(this.detailObj, null);
      } else {
        if (!this.id) this.id = this.id;
        if (this.id) this.populateDetail(this.id);
        else {
          console.error("No id provided to show info");
          return;
        }
      }
    }
}
