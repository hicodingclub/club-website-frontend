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
  ArticleDetailComponent
} from './article-detail.component';
import {
  ArticleService
} from '../article.service';
@Component({
  selector: 'app-article-detail-sub',
  templateUrl: './article-detail-sub.component.html',
  styleUrls: ['./article-detail.component.css', './article-detail-sub.component.css']
})
export class ArticleDetailSubComponent extends ArticleDetailComponent
implements OnInit {
  // @Input() inputData;
  constructor(public articleService: ArticleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(articleService, injector, router, route, location);
  }
  ngOnInit() {
    if (!this.id) this.id = this.inputData;
    if (this.id) this.populateDetail(this.id);
    else console.error("Routing error for detail sub view... no id...");
  }
  ngAfterViewInit() {}
}