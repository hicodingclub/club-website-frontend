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
  EventDetailComponent
} from './event-detail.component';
import {
  EventService
} from '../event.service';
@Component({
  selector: 'app-event-detail-sub',
  templateUrl: './event-detail-sub.component.html',
  styleUrls: ['./event-detail.component.css', './event-detail-sub.component.css']
})
export class EventDetailSubComponent extends EventDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public eventService: EventService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(eventService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}