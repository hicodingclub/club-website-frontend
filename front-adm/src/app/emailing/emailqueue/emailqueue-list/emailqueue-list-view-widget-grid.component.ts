import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EmailqueueListViewComponent
} from './emailqueue-list-view.component';
@Component({
  selector: 'app-emailqueue-list-view-widget-grid',
  templateUrl: './emailqueue-list-view-widget-grid.component.html',
  styleUrls: ['./emailqueue-list-view-widget-grid.component.css'],
})
export class EmailqueueListViewWidgetGridComponent extends EmailqueueListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}