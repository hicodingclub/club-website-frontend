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
  SiteComponent,
  ViewType
} from '../site.component';
import {
  SiteService
} from '../site.service';
@Component({
  selector: 'app-site-detail-field',
  templateUrl: './site-detail-field.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailFieldComponent extends SiteComponent
implements OnInit {
  // @Input() id: string;
  // @Input() detailObj: any;
  // @Input() showFieldsStr: string;
  showFields: string[];
  constructor(public siteService: SiteService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(siteService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'ready': 'Ready',
      'enabled': 'Enabled',
      'muser_id': 'Muser Id',
      'createdAt': 'Created at',
      'updatedAt': 'Updated at',
    };
    this.stringFields = ['name', 'muser_id', ];
    this.dateFields = ['createdAt', 'updatedAt', ];
    this.viewHiddenFields = ['muser_id', ];
  }
  ngOnInit() {
    if (!this.showFieldsStr) {
      console.error("A field has to be given to show it.");
      return;
    }
    this.showFields = this.showFieldsStr.match(/\S+/g);
    if (this.detailObj) {
      this.onDetailReturned(this.detailObj, null);
    } else {
      if (!this.id) this.id = this.id;
      if (this.id) this.populateDetail(this.id);
      else {
        console.error("No id provided to show info");
        return;
      }
    }
  }
}