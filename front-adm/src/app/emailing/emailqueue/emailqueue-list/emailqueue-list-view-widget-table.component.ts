import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EmailqueueListViewComponent
} from './emailqueue-list-view.component';
@Component({
  selector: 'app-emailqueue-list-view-widget-table',
  templateUrl: './emailqueue-list-view-widget-table.component.html',
  styleUrls: ['./emailqueue-list-view-widget-table.component.css'],
})
export class EmailqueueListViewWidgetTableComponent extends EmailqueueListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}