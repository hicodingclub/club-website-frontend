import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  SiteListViewComponent
} from './site-list-view.component';
@Component({
  selector: 'app-site-list-view-widget-grid',
  templateUrl: './site-list-view-widget-grid.component.html',
  styleUrls: ['./site-list-view-widget-grid.component.css'],
})
export class SiteListViewWidgetGridComponent extends SiteListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}