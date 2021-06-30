import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PageListViewComponent
} from './page-list-view.component';
@Component({
  selector: 'app-page-list-view-widget-table',
  templateUrl: './page-list-view-widget-table.component.html',
  styleUrls: ['./page-list-view-widget-table.component.css'],
})
export class PageListViewWidgetTableComponent extends PageListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}