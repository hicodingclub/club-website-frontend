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
  ArticleListComponent
} from './article-list.component';
import {
  ArticleService
} from '../article.service';
@Component({
  selector: 'app-article-list-general',
  templateUrl: './article-list-general.component.html',
  styleUrls: ['./article-list.component.css', './article-list-general.component.css']
})
export class ArticleListGeneralComponent extends ArticleListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = true;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public articleService: ArticleService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(articleService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}