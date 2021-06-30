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
  MpubmoduleListComponent
} from './mpubmodule-list.component';
import {
  MpubmoduleService
} from '../mpubmodule.service';
@Component({
  selector: 'app-mpubmodule-list-select',
  templateUrl: './mpubmodule-list-select.component.html',
  styleUrls: ['./mpubmodule-list.component.css', './mpubmodule-list-select.component.css']
})
export class MpubmoduleListSelectComponent extends MpubmoduleListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = true;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = false;
  public majorUi: boolean = false;
  constructor(public mpubmoduleService: MpubmoduleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mpubmoduleService, injector, router, route, location);
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