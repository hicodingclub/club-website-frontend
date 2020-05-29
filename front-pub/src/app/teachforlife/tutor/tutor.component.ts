import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { OnInit, Injector, Input, Output, EventEmitter } from '@angular/core';
import { TutorService } from './tutor.service';

const itemCamelName = 'tutors';

export { ViewType };

import { ViewChild } from '@angular/core';

import { ElementRef } from '@angular/core';


export class TutorComponent extends MddsBaseComponent implements OnInit {
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



    @ViewChild('TeachforlifeModal', {static: true}) public focusEl: ElementRef;

    constructor(
      
      public tutorService: TutorService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(tutorService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['introduction', 'Introduction']);this.briefFieldsInfo.push(['photo', 'Photo']);this.briefFieldsInfo.push(['specificSubjects', 'Tutoring Subjects']);



        this.emailFields = [['Email','email'],];
        this.requiredFields = ['name','introduction','photo','specificSubjects','grade','email','acceptGrade','availableTime',];


        this.schemaName = 'tutor';
        
        this.modulePath = 'teachforlife';
        this.indexFields = ['name', ];
    }

    ngOnInit() {
        this.style = this.style || {};
        this.options = this.options || {};
    }
}
