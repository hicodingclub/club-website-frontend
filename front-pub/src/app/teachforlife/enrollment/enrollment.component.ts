import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { EnrollmentService } from './enrollment.service';

const itemCamelName = 'sign Up for Tutoring';

export { ViewType };

import { ViewChild } from '@angular/core';


import { ComponentFactoryResolver } from '@angular/core';
import { TeachforlifeRefSelectDirective } from '../teachforlife.component';

import { TutorDetailSelComponent } from '../tutor/tutor-detail/tutor-detail-sel.component';
import { TutorDetailPopComponent } from '../tutor/tutor-detail/tutor-detail-pop.component';
import { TutorListSelectComponent } from '../tutor/tutor-list/tutor-list-select.component';


export class EnrollmentComponent extends MddsBaseComponent implements OnInit {
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

      'tutor': {
          'select-type': TutorListSelectComponent,
          'select-detail-type': TutorDetailSelComponent,
          'pop-detail-type': TutorDetailPopComponent,
          'componentRef': null},
    }
    @ViewChild(TeachforlifeRefSelectDirective, {static: true}) refSelectDirective: TeachforlifeRefSelectDirective;



    constructor(
      public componentFactoryResolver: ComponentFactoryResolver,
      public enrollmentService: EnrollmentService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(enrollmentService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['email', 'Email']);this.briefFieldsInfo.push(['grade', 'Grade']);this.briefFieldsInfo.push(['status', 'Status']);this.briefFieldsInfo.push(['createdAt', 'Created at']);



        this.referenceFieldsMap = {'tutor': 'tutor',};
        this.referenceFieldsReverseMap = {'tutor': 'tutor',};
        this.emailFields = [['Email','email'],];
        this.requiredFields = ['name','email','grade','tutor',];


        this.schemaName = 'enrollment';
        
        this.modulePath = 'teachforlife';
        this.indexFields = ['name', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
