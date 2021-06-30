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
  SiteDetailComponent
} from './site-detail.component';
import {
  SiteService
} from '../site.service';
@Component({
  selector: 'app-site-detail-sub',
  templateUrl: './site-detail-sub.component.html',
  styleUrls: ['./site-detail.component.css', './site-detail-sub.component.css']
})
export class SiteDetailSubComponent extends SiteDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public siteService: SiteService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(siteService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}