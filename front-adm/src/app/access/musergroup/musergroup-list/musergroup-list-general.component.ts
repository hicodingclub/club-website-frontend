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
  MusergroupListComponent
} from './musergroup-list.component';
import {
  MusergroupService
} from '../musergroup.service';
@Component({
  selector: 'app-musergroup-list-general',
  templateUrl: './musergroup-list-general.component.html',
  styleUrls: ['./musergroup-list.component.css', './musergroup-list-general.component.css']
})
export class MusergroupListGeneralComponent extends MusergroupListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public musergroupService: MusergroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(musergroupService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}