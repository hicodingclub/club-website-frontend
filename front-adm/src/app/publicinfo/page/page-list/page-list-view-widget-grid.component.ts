import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  PageListViewComponent
} from './page-list-view.component';
@Component({
  selector: 'app-page-list-view-widget-grid',
  templateUrl: './page-list-view-widget-grid.component.html',
  styleUrls: ['./page-list-view-widget-grid.component.css'],
})
export class PageListViewWidgetGridComponent extends PageListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}