import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from './confirmation.service';

const itemCamelName = 'confirmation';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { SummerprogramRefSelectDirective } from '../summerprogram.component';

import { SpenrollmentDetailSelComponent } from '../spenrollment/spenrollment-detail/spenrollment-detail-sel.component';
import { SpenrollmentDetailPopComponent } from '../spenrollment/spenrollment-detail/spenrollment-detail-pop.component';
import { SpenrollmentListSelectComponent } from '../spenrollment/spenrollment-list/spenrollment-list-select.component';


export class ConfirmationComponent extends MddsBaseComponent implements OnInit {
    // *** common input fields
    @Input()
    public style: any; // {}
    @Input()
    public options: any; // {} uiOptions
    @Input()
    public searchObj: any;

    // *** list component
    @Input()
    public inputData: any;
    @Input()
    public queryParams: any;  // {listSortField: 'a', listSortOrder: 'asc' / 'desc', perPage: 6}
    @Input()
    public categoryBy:string; //field name whose value is used as category

    // list-asso component
    @Input('asso') public associationField: string;

    // list select component
    @Output() outputData: any;

    // *** edit / create component
    @Input() 
    public id: string;
    @Input()
    public cid: string; // copy id
    @Input()
    public initData: any; // some fields has data already. eg: {a: b}. Used for add
    @Input()
    public embeddedView: boolean;
    @Input()
    public embedMode: string; // parent to tell the action - create
    @Output()
    public doneData = new EventEmitter<boolean>();
    @Output()
    public done = new EventEmitter<any>();

    // *** detail component
    // @Input() 
    // public id:string;
    @Input()
    public disableActionButtions:boolean;
    @Output()
    public eventEmitter: EventEmitter<any> = new EventEmitter();

    // detail sub component
    // @Input() inputData;

    // detail show field component
    // @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;

    // detail sel component
    //@Input() inputData;
    //@Output() outputData;

    // detail pop component
    // @Input() inputData;
    // @Output() outputData;


    public selectComponents = {

      'enrollment': {
          'select-type': SpenrollmentListSelectComponent,
          'select-detail-type': SpenrollmentDetailSelComponent,
          'pop-detail-type': SpenrollmentDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(SummerprogramRefSelectDirective, {static: true}) refSelectDirective: SummerprogramRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public confirmationService: ConfirmationService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(confirmationService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['email', 'Email']);this.briefFieldsInfo.push(['type', 'Type']);this.briefFieldsInfo.push(['enrollment', 'Enrollment']);this.briefFieldsInfo.push(['confirmed', 'Confirmed']);this.briefFieldsInfo.push(['createdAt', 'Created at']);


        this.referenceFieldsMap = {'enrollment': 'spenrollment',};
        this.referenceFieldsReverseMap = {'spenrollment': 'enrollment',};
        this.requiredFields = ['name','email',];
        this.emailFields = [['Email','email'],];

        this.schemaName = 'confirmation';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'summerprogram';
        this.indexFields = ['email', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
