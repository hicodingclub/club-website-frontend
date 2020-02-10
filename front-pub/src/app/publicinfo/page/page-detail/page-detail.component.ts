import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute }    from '@angular/router';
import { Injector } from '@angular/core';

import { PageComponent, ViewType } from '../page.component';
import { PageService } from '../page.service';



import { QueryList, ViewChildren } from '@angular/core';
import { MddsRichTextShowDirective } from '@hicoder/angular-core';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent extends PageComponent implements OnInit, AfterViewInit {
  @Input() 
  public id:string;
  @Input()
  public searchObj:any;
  @Input()
  public disableActionButtions:boolean;
  @Input()
  public style: any; // {}
  @Input()
  public options: any; // {} uiOptions


  @ViewChildren(MddsRichTextShowDirective) textEditors: QueryList<MddsRichTextShowDirective>;

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
      this.style = this.style || {};
      this.options = this.options || {};
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

  ngAfterViewInit() {

  }
}
