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
  TutorDetailComponent
} from './tutor-detail.component';
import {
  TutorService
} from '../tutor.service';
@Component({
  selector: 'app-tutor-detail-sub',
  templateUrl: './tutor-detail-sub.component.html',
  styleUrls: ['./tutor-detail.component.css', './tutor-detail-sub.component.css']
})
export class TutorDetailSubComponent extends TutorDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public tutorService: TutorService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(tutorService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}