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
  MaccountListComponent
} from './maccount-list.component';
import {
  MaccountService
} from '../maccount.service';
@Component({
  selector: 'app-maccount-list-select',
  templateUrl: './maccount-list-select.component.html',
  styleUrls: ['./maccount-list.component.css', './maccount-list-select.component.css']
})
export class MaccountListSelectComponent extends MaccountListComponent implements OnInit {
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
  constructor(public maccountService: MaccountService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountService, injector, router, route, location);
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