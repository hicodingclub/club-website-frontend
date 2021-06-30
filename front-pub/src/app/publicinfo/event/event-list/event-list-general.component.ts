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
  EventListComponent
} from './event-list.component';
import {
  EventService
} from '../event.service';
@Component({
  selector: 'app-event-list-general',
  templateUrl: './event-list-general.component.html',
  styleUrls: ['./event-list.component.css', './event-list-general.component.css']
})
export class EventListGeneralComponent extends EventListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = true;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public eventService: EventService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(eventService, injector, router, route, location);
    this.listViews = ['list', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}