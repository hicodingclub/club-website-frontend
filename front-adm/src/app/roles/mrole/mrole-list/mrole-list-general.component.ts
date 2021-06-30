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
  MroleListComponent
} from './mrole-list.component';
import {
  MroleService
} from '../mrole.service';
@Component({
  selector: 'app-mrole-list-general',
  templateUrl: './mrole-list-general.component.html',
  styleUrls: ['./mrole-list.component.css', './mrole-list-general.component.css']
})
export class MroleListGeneralComponent extends MroleListComponent implements OnInit {
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
  constructor(public mroleService: MroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mroleService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}