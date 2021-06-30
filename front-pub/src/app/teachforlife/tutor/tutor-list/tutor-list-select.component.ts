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
  TutorListComponent
} from './tutor-list.component';
import {
  TutorService
} from '../tutor.service';
@Component({
  selector: 'app-tutor-list-select',
  templateUrl: './tutor-list-select.component.html',
  styleUrls: ['./tutor-list.component.css', './tutor-list-select.component.css']
})
export class TutorListSelectComponent extends TutorListComponent implements OnInit {
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
  constructor(public tutorService: TutorService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(tutorService, injector, router, route, location);
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