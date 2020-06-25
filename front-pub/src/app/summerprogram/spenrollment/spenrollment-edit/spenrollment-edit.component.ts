import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { SpenrollmentEditCustComponent } from '../../../summerprogram-cust/base/spenrollment/spenrollment-edit.cust.component';
import { ViewType } from '../spenrollment.component';
import { SpenrollmentService } from '../spenrollment.service';







@Component({
  selector: 'app-spenrollment-edit',
  templateUrl: './spenrollment-edit.component.html',
  styleUrls: ['./spenrollment-edit.component.css']
})
export class SpenrollmentEditComponent extends SpenrollmentEditCustComponent implements OnInit, AfterViewInit {        
    // @Input() 
    // public id: string;
    // @Input()
    // public cid: string; // copy id
    // @Input()
    // public initData: any; // some fields has data already. eg: {a: b}. Used for add
    // @Output()
    // public doneData = new EventEmitter<boolean>();
    // @Output()
    // public done = new EventEmitter<any>();
    // @Input()
    // public embeddedView: boolean;
    // @Input()
    // public embedMode: string; // parent to tell the action - create

    public action: string;
    public minDate = {year: (new Date()).getFullYear() - 100, month: 1, day: 1};



    constructor(
      public spenrollmentService: SpenrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                spenrollmentService, injector, router, route, location, ViewType.EDIT);

          this.fieldDisplayNames = {
            'name': 'Name',
            'email': 'Email',
            'phoneNumber': 'Phone Number',
            'grade': 'Grade',
            'notes': 'Notes',
          };
          this.stringFields.push('name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('notes');
          this.numberFields = ['grade', ];
          this.textareaFields = ['notes', ];

          
          const detail = {};
          this.detail = this.formatDetail(detail);
    }

    ngOnInit() {
      super.ngOnInit();
      if (this.embedMode == 'create') { // parent ask to create
        this.action='Create';
        this.getDetailData();
      } else {
        if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.action='Edit';
            this.populateDetailForAction(this.id, 'edit'); //populate with action as 'edit'
        }
        else {
            this.action='Create';
            if (!this.cid) this.cid = this.route.snapshot.queryParamMap.get('cid');
            if (this.cid) {
                this.populateDetailFromCopy(this.cid);
            } else {
              this.getDetailData();
            }
        }
      }
      // get editHintFields
      this.searchHintFieldValues();
    }

    ngAfterViewInit() {
      // Initialize all tooltips
      $('[data-toggle="tooltip"]').tooltip();
    }

    getDetailData() {
      if (this.initData) {
        this.action='Add';
        let detail = {
        };
        for (let prop of Object.keys(this.initData)) {
            detail[prop] = this.initData[prop];
            this.hiddenFields.push(prop);
        }
        this.detail = this.formatDetail(detail);
      } else {
          let detail = {
          };
          this.detail = this.formatDetail(detail);
      }
    }
}
