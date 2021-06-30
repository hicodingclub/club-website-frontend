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
  GeneralinfoListComponent
} from './generalinfo-list.component';
import {
  GeneralinfoService
} from '../generalinfo.service';
@Component({
  selector: 'app-generalinfo-list-general',
  templateUrl: './generalinfo-list-general.component.html',
  styleUrls: ['./generalinfo-list.component.css', './generalinfo-list-general.component.css']
})
export class GeneralinfoListGeneralComponent extends GeneralinfoListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public generalinfoService: GeneralinfoService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(generalinfoService, injector, router, route, location);
    this.listViews = ['list', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}