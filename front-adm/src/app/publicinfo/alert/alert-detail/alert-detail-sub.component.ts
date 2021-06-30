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
  AlertDetailComponent
} from './alert-detail.component';
import {
  AlertService
} from '../alert.service';
@Component({
  selector: 'app-alert-detail-sub',
  templateUrl: './alert-detail-sub.component.html',
  styleUrls: ['./alert-detail.component.css', './alert-detail-sub.component.css']
})
export class AlertDetailSubComponent extends AlertDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public alertService: AlertService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(alertService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}