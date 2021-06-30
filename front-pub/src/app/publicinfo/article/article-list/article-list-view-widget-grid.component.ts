import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ArticleListViewComponent
} from './article-list-view.component';
@Component({
  selector: 'app-article-list-view-widget-grid',
  templateUrl: './article-list-view-widget-grid.component.html',
  styleUrls: ['./article-list-view-widget-grid.component.css'],
})
export class ArticleListViewWidgetGridComponent extends ArticleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}