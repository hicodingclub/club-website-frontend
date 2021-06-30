import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EventListViewComponent
} from './event-list-view.component';
@Component({
  selector: 'app-event-list-view-widget-grid',
  templateUrl: './event-list-view-widget-grid.component.html',
  styleUrls: ['./event-list-view-widget-grid.component.css'],
})
export class EventListViewWidgetGridComponent extends EventListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}