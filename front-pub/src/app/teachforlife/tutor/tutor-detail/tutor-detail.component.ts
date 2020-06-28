import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { TutorDetailCustComponent } from '../../../teachforlife-cust/base/tutor/tutor-detail.cust.component';
import { ViewType } from '../tutor.component';
import { TutorService } from '../tutor.service';




@Component({
  selector: 'app-tutor-detail',
  templateUrl: './tutor-detail.component.html',
  styleUrls: ['./tutor-detail.component.css']
})
export class TutorDetailComponent extends TutorDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtions:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();



  constructor(
      
      public tutorService: TutorService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                tutorService, injector, router, route, location, ViewType.DETAIL);

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
  }

  ngOnInit() {
      super.ngOnInit();
      if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.populateDetail(this.id);
      } else if (this.searchObj) {
        // search item based on the unique value
        this.populateDetailByFields(this.searchObj);
      } else {
        console.error("Routing error for detail view... no id...");
        return;
      }
  }

  ngAfterViewInit() {

  }
}
