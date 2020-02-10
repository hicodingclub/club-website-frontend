import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PageService } from '../page.service';
import { PageDetailComponent } from './page-detail.component';




@Component({
  selector: 'app-page-detail-widget-page',
  templateUrl: './page-detail-widget-page.component.html',
  styleUrls: ['./page-detail.component.css', './page-detail-widget-page.component.css']
})
export class PageDetailWidgetPageComponent extends PageDetailComponent implements OnInit, AfterViewInit {
  constructor(
      
      public pageService: PageService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location) {
          super(
                pageService, injector, router, route, location);
  }

  ngOnInit() {
      super.ngOnInit();
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
  }
}
