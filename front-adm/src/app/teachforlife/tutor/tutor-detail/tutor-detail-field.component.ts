import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  TutorComponent,
  ViewType
} from '../tutor.component';
import {
  TutorService
} from '../tutor.service';
@Component({
  selector: 'app-tutor-detail-field',
  templateUrl: './tutor-detail-field.component.html',
  styleUrls: ['./tutor-detail.component.css']
})
export class TutorDetailFieldComponent extends TutorComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public tutorService: TutorService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(tutorService, injector, router, route, location);
    this.view = ViewType.DETAIL;
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
    this.numberFields = ['grade', ];
    this.arrayFields = [
      ['subjectTags', 'SchemaString'],
    ];
    this.textareaFields = ['introduction', 'availableTime', 'specificSubjects', ];
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