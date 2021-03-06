import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
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
  selector: 'app-spenrollment-detail-sel',
  templateUrl: './spenrollment-detail-sel.component.html',
  styleUrls: ['./spenrollment-detail.component.css']
})
export class SpenrollmentDetailSelComponent extends SpenrollmentDetailComponent
implements OnInit {
  // @Input() inputData;
  // @Output() outputData;
  done = new EventEmitter < boolean > ();
  constructor(public spenrollmentService: SpenrollmentService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(spenrollmentService, injector, router, route, location);
    this.majorUi = false;
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail view... no id...");
  }
  ngAfterViewInit() {}
}