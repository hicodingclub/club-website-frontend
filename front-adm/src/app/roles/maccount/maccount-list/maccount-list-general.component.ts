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
  MaccountListComponent
} from './maccount-list.component';
import {
  MaccountService
} from '../maccount.service';
@Component({
  selector: 'app-maccount-list-general',
  templateUrl: './maccount-list-general.component.html',
  styleUrls: ['./maccount-list.component.css', './maccount-list-general.component.css']
})
export class MaccountListGeneralComponent extends MaccountListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public maccountService: MaccountService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}