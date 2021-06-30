import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  SiteListViewComponent
} from './site-list-view.component';
@Component({
  selector: 'app-site-list-view-widget-table',
  templateUrl: './site-list-view-widget-table.component.html',
  styleUrls: ['./site-list-view-widget-table.component.css'],
})
export class SiteListViewWidgetTableComponent extends SiteListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}