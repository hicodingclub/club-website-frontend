import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ArticleListViewComponent
} from './article-list-view.component';
@Component({
  selector: 'app-article-list-view-widget-table',
  templateUrl: './article-list-view-widget-table.component.html',
  styleUrls: ['./article-list-view-widget-table.component.css'],
})
export class ArticleListViewWidgetTableComponent extends ArticleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}