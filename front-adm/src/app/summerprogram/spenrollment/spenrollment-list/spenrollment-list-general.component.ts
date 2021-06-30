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
  SpenrollmentListComponent
} from './spenrollment-list.component';
import {
  SpenrollmentService
} from '../spenrollment.service';
@Component({
  selector: 'app-spenrollment-list-general',
  templateUrl: './spenrollment-list-general.component.html',
  styleUrls: ['./spenrollment-list.component.css', './spenrollment-list-general.component.css']
})
export class SpenrollmentListGeneralComponent extends SpenrollmentListComponent implements OnInit {
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
  constructor(public spenrollmentService: SpenrollmentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(spenrollmentService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}