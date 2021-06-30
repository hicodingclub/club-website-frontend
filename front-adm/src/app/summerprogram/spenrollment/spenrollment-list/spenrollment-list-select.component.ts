import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  AfterViewInit
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
  selector: 'app-spenrollment-list-select',
  templateUrl: './spenrollment-list-select.component.html',
  styleUrls: ['./spenrollment-list.component.css', './spenrollment-list-select.component.css']
})
export class SpenrollmentListSelectComponent extends SpenrollmentListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = true;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = false;
  public majorUi: boolean = false;
  constructor(public spenrollmentService: SpenrollmentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(spenrollmentService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    this.queryOnNgInit = false; // don't do query on the super class.
    super.ngOnInit();
    this.listCategory1 = {}; // no do query based on category;
    this.listCategory2 = {}; // no do query based on category;
    this.selectedId = this.inputData;
    this.searchList();
  }
}