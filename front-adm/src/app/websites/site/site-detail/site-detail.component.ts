import {
  Component,
  OnInit,
  AfterViewInit,
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
  SiteDetailCustComponent
} from '../../../websites-cust/base/site/site-detail.cust.component';
import {
  ViewType
} from '../site.component';
import {
  SiteService
} from '../site.service';
@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent extends SiteDetailCustComponent implements OnInit, AfterViewInit {
  // @Input() 
  // public id:string;
  // @Input()
  // public searchObj:any;
  // @Input()
  // public disableActionButtons:boolean;
  // @Output()
  // public eventEmitter: EventEmitter<any> = new EventEmitter();
  constructor(public siteService: SiteService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(siteService, injector, router, route, location);
    this.view = ViewType.DETAIL;
    this.fieldDisplayNames = {
      'name': 'Name',
      'ready': 'Ready',
      'enabled': 'Enabled',
      'projectFile': 'Project File',
      'muser_id': 'Muser Id',
      'createdAt': 'Created at',
      'updatedAt': 'Updated at',
    };
    this.stringFields = ['name', 'projectFile', 'muser_id', ];
    this.dateFields = ['createdAt', 'updatedAt', ];
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.id) this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.populateDetail(this.id);
    } else if (this.searchObj) {
      // search item based on the unique value
      this.populateDetailByFields(this.searchObj);
    } else {
      console.error("Routing error for detail view... no id...");
      return;
    }
  }
  ngAfterViewInit() {}
}