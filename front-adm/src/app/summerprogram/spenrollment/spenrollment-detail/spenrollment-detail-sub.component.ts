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
  SpenrollmentDetailComponent
} from './spenrollment-detail.component';
import {
  SpenrollmentService
} from '../spenrollment.service';
@Component({
  selector: 'app-spenrollment-detail-sub',
  templateUrl: './spenrollment-detail-sub.component.html',
  styleUrls: ['./spenrollment-detail.component.css', './spenrollment-detail-sub.component.css']
})
export class SpenrollmentDetailSubComponent extends SpenrollmentDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public spenrollmentService: SpenrollmentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(spenrollmentService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}