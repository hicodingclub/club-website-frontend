import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PageComponent, ViewType } from '../page.component';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-detail-field',
  templateUrl: './page-detail-field.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailFieldComponent extends PageComponent
        implements OnInit {
    @Input() id: string;
    @Input() detailObj: any;
    @Input() showFieldsStr: string;
    showFields: string[];
    
    constructor(
        public pageService: PageService,
        public injector: Injector,
        public router: Router,
        public route: ActivatedRoute,
        public location: Location) {
          super(
                pageService, injector, router, route, location, ViewType.DETAIL);
          

          this.stringFields.push('content');








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
