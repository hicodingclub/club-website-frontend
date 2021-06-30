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
  EmailqueueDetailComponent
} from './emailqueue-detail.component';
import {
  EmailqueueService
} from '../emailqueue.service';
@Component({
  selector: 'app-emailqueue-detail-sub',
  templateUrl: './emailqueue-detail-sub.component.html',
  styleUrls: ['./emailqueue-detail.component.css', './emailqueue-detail-sub.component.css']
})
export class EmailqueueDetailSubComponent extends EmailqueueDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public emailqueueService: EmailqueueService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailqueueService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}