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
  PageDetailComponent
} from './page-detail.component';
import {
  PageService
} from '../page.service';
@Component({
  selector: 'app-page-detail-sub',
  templateUrl: './page-detail-sub.component.html',
  styleUrls: ['./page-detail.component.css', './page-detail-sub.component.css']
})
export class PageDetailSubComponent extends PageDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public pageService: PageService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(pageService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}