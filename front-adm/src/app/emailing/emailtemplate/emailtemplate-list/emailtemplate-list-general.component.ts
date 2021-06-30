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
  EmailtemplateListComponent
} from './emailtemplate-list.component';
import {
  EmailtemplateService
} from '../emailtemplate.service';
@Component({
  selector: 'app-emailtemplate-list-general',
  templateUrl: './emailtemplate-list-general.component.html',
  styleUrls: ['./emailtemplate-list.component.css', './emailtemplate-list-general.component.css']
})
export class EmailtemplateListGeneralComponent extends EmailtemplateListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public emailtemplateService: EmailtemplateService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailtemplateService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}