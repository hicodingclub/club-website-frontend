import { Component, OnInit, AfterViewInit, Input, Output, Directive, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';

declare const $: any;

import { TutorEditCustComponent } from '../../../teachforlife-cust/base/tutor/tutor-edit.cust.component';
import { ViewType } from '../tutor.component';
import { TutorService } from '../tutor.service';



import { NG_VALIDATORS, Validator, ValidationErrors, AbstractControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[teachforlifeTutorDirectiveEmail]',
  providers: [{provide: NG_VALIDATORS, useExisting: TeachforlifeTutorDirectiveEmail, multi: true}]
})
export class TeachforlifeTutorDirectiveEmail implements Validator {
  validators:any[] = [
      
         {validator: function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
},
          msg: `Please fill a valid email address.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'teachforlifeTutorDirectiveEmail': obj.msg };
            } catch (e) {
                return { 'teachforlifeTutorDirectiveEmail': obj.msg };
            }
        }
    }
    return null;
  }
}
@Directive({
  selector: '[teachforlifeTutorDirectivePhoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: TeachforlifeTutorDirectivePhoneNumber, multi: true}]
})
export class TeachforlifeTutorDirectivePhoneNumber implements Validator {
  validators:any[] = [
      
         {validator: function(phone) {
    var re = /^(\d+-?)+\d+$/;
    return re.test(phone)
},
          msg: `Please fill a valid phone number.`
         },
  ];
  validate(control: AbstractControl): ValidationErrors | null {
    //TODO: For validator of NgModelGroup, need to get list of contained controls and do validation on the combined data.

    let value = control.value;
    return this.validateValue(value);
  }
  validateValue(value:any): ValidationErrors | null {
    //only compare when input presents
    let result = true;
    if (typeof value == 'string') {
        for (let idx = 0; idx < this.validators.length; idx ++) {
            let obj = this.validators[idx];
            try {
                result = obj.validator(value)
                if (result == false ) return { 'teachforlifeTutorDirectivePhoneNumber': obj.msg };
            } catch (e) {
                return { 'teachforlifeTutorDirectivePhoneNumber': obj.msg };
            }
        }
    }
    return null;
  }
}





@Component({
  selector: 'app-tutor-edit',
  templateUrl: './tutor-edit.component.html',
  styleUrls: ['./tutor-edit.component.css']
})
export class TutorEditComponent extends TutorEditCustComponent implements OnInit, AfterViewInit {        
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
      public tutorService: TutorService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                tutorService, injector, router, route, location);
          this.view = ViewType.EDIT;

          this.fieldDisplayNames = {
            'name': 'Name',
            'grade': 'Grade',
            'email': 'Email',
            'phoneNumber': 'Phone Number',
            'introduction': 'Introduction',
            'photo': 'Photo',
            'acceptGrade': 'Open to Grade',
            'availableTime': 'Available Time',
            'specificSubjects': 'Tutoring Subjects',
            'subjectTags': 'Subject Tags',
          };
          this.stringFields.push('name');
          this.stringFields.push('email');
          this.stringFields.push('phoneNumber');
          this.stringFields.push('introduction');
          this.stringFields.push('photo');
          this.stringFields.push('acceptGrade');
          this.stringFields.push('availableTime');
          this.stringFields.push('specificSubjects');
          this.numberFields = [
            'grade',
          ];
          this.arrayFields = [
            ['subjectTags', 'SchemaString'],
          ];
          this.textareaFields = [
            'introduction',
            'availableTime',
            'specificSubjects',
          ];
          this.editHintFields = {
            'subjectTags': [],
          };

          
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
