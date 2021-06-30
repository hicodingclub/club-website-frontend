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
  MfilegroupDetailComponent
} from './mfilegroup-detail.component';
import {
  MfilegroupService
} from '../mfilegroup.service';
@Component({
  selector: 'app-mfilegroup-detail-sub',
  templateUrl: './mfilegroup-detail-sub.component.html',
  styleUrls: ['./mfilegroup-detail.component.css', './mfilegroup-detail-sub.component.css']
})
export class MfilegroupDetailSubComponent extends MfilegroupDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public mfilegroupService: MfilegroupService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(mfilegroupService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}