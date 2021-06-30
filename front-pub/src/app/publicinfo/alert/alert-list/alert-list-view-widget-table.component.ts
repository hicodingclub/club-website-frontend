import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  AlertListViewComponent
} from './alert-list-view.component';
@Component({
  selector: 'app-alert-list-view-widget-table',
  templateUrl: './alert-list-view-widget-table.component.html',
  styleUrls: ['./alert-list-view-widget-table.component.css'],
})
export class AlertListViewWidgetTableComponent extends AlertListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}