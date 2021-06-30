import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EventListViewComponent
} from './event-list-view.component';
@Component({
  selector: 'app-event-list-view-widget-table',
  templateUrl: './event-list-view-widget-table.component.html',
  styleUrls: ['./event-list-view-widget-table.component.css'],
})
export class EventListViewWidgetTableComponent extends EventListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}