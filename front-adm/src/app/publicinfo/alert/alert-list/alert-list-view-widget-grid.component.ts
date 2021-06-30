import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  AlertListViewComponent
} from './alert-list-view.component';
@Component({
  selector: 'app-alert-list-view-widget-grid',
  templateUrl: './alert-list-view-widget-grid.component.html',
  styleUrls: ['./alert-list-view-widget-grid.component.css'],
})
export class AlertListViewWidgetGridComponent extends AlertListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}