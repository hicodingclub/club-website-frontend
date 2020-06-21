import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

import { SpenrollmentListComponent } from './spenrollment-list.component';
import { SpenrollmentService } from '../spenrollment.service';

@Component({
  selector: 'app-spenrollment-list-select',
  templateUrl: './spenrollment-list-select.component.html',
  styleUrls: ['./spenrollment-list.component.css']
})
export class SpenrollmentListSelectComponent extends SpenrollmentListComponent
        implements OnInit {
    // @Input() inputData;
    // @Output() outputData;
    done = new EventEmitter<boolean>();

    constructor(
        public spenrollmentService: SpenrollmentService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location
        ) {
            super(spenrollmentService, injector, router, route, location);
            this.majorUi = false;
            this.itemMultiSelect = false;
    }

    ngOnInit() {
        this.selectedId = this.inputData;
        this.populateList();
    }
}
