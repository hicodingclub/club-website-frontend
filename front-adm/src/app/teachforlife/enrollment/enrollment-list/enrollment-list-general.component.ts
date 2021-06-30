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
  EnrollmentListComponent
} from './enrollment-list.component';
import {
  EnrollmentService
} from '../enrollment.service';
@Component({
  selector: 'app-enrollment-list-general',
  templateUrl: './enrollment-list-general.component.html',
  styleUrls: ['./enrollment-list.component.css', './enrollment-list-general.component.css']
})
export class EnrollmentListGeneralComponent extends EnrollmentListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public enrollmentService: EnrollmentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(enrollmentService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}