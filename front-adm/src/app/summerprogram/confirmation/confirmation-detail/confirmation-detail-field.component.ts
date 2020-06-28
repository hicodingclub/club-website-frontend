import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ConfirmationComponent, ViewType } from '../confirmation.component';
import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'app-confirmation-detail-field',
  templateUrl: './confirmation-detail-field.component.html',
  styleUrls: ['./confirmation-detail.component.css']
})
export class ConfirmationDetailFieldComponent extends ConfirmationComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public confirmationService: ConfirmationService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(null,
                confirmationService, injector, router, route, location, ViewType.DETAIL);
          
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
          this.referenceFields = [
            'enrollment',
          ];
          this.dateFields = [
            'createdAt',
          ];
          this.numberFields = [
            'confirmed',
          ];
          this.ownSearchStringFields = [
            'type',
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
