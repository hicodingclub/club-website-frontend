import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { AlertComponent, ViewType } from '../alert.component';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-alert-detail-field',
  templateUrl: './alert-detail-field.component.html',
  styleUrls: ['./alert-detail.component.css']
})
export class AlertDetailFieldComponent extends AlertComponent
        implements OnInit {
    // @Input() id: string;
    // @Input() detailObj: any;
    // @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public alertService: AlertService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                alertService, injector, router, route, location, ViewType.DETAIL);
          
          this.fieldDisplayNames = {
            'name': 'Name',
            'description': 'Description',
            'linkName': 'Link Name',
            'linkURL': 'Link Url',
            'show': 'Show',
            'order': 'Order',
          };
          this.stringFields.push('name');
          this.stringFields.push('description');
          this.stringFields.push('linkName');
          this.stringFields.push('linkURL');
          this.numberFields = [
            'order',
          ];
          this.textareaFields = [
            'description',
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
