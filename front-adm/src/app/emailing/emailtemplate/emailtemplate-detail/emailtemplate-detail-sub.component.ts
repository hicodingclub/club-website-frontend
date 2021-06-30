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
  EmailtemplateDetailComponent
} from './emailtemplate-detail.component';
import {
  EmailtemplateService
} from '../emailtemplate.service';
@Component({
  selector: 'app-emailtemplate-detail-sub',
  templateUrl: './emailtemplate-detail-sub.component.html',
  styleUrls: ['./emailtemplate-detail.component.css', './emailtemplate-detail-sub.component.css']
})
export class EmailtemplateDetailSubComponent extends EmailtemplateDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public emailtemplateService: EmailtemplateService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(emailtemplateService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}