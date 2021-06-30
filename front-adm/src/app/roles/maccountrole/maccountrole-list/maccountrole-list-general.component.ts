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
  MaccountroleListComponent
} from './maccountrole-list.component';
import {
  MaccountroleService
} from '../maccountrole.service';
@Component({
  selector: 'app-maccountrole-list-general',
  templateUrl: './maccountrole-list-general.component.html',
  styleUrls: ['./maccountrole-list.component.css', './maccountrole-list-general.component.css']
})
export class MaccountroleListGeneralComponent extends MaccountroleListComponent implements OnInit {
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
  constructor(public maccountroleService: MaccountroleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(maccountroleService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}