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
  EmailqueueListComponent
} from './emailqueue-list.component';
import {
  EmailqueueService
} from '../emailqueue.service';
@Component({
  selector: 'app-emailqueue-list-general',
  templateUrl: './emailqueue-list-general.component.html',
  styleUrls: ['./emailqueue-list.component.css', './emailqueue-list-general.component.css']
})
export class EmailqueueListGeneralComponent extends EmailqueueListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public emailqueueService: EmailqueueService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailqueueService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}