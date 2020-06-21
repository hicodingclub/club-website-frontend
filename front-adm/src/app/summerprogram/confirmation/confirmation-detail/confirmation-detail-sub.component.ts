import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { ConfirmationDetailComponent } from './confirmation-detail.component';
import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'app-confirmation-detail-sub',
  templateUrl: './confirmation-detail-sub.component.html',
  styleUrls: ['./confirmation-detail.component.css']
})
export class ConfirmationDetailSubComponent extends ConfirmationDetailComponent 
        implements OnInit {
    // @Input() inputData;
    
    constructor(
        public confirmationService: ConfirmationService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
            super(null,confirmationService, injector, router, route, location);
    }

    ngOnInit() {
      if (!this.id) this.id = this.inputData;
      if (this.id) this.populateDetail(this.id);
      else console.error("Routing error for detail sub view... no id...");
    }

    ngAfterViewInit() {
    }
}
