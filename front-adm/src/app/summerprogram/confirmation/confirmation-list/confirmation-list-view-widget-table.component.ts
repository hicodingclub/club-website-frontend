import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ConfirmationListViewComponent
} from './confirmation-list-view.component';
@Component({
  selector: 'app-confirmation-list-view-widget-table',
  templateUrl: './confirmation-list-view-widget-table.component.html',
  styleUrls: ['./confirmation-list-view-widget-table.component.css'],
})
export class ConfirmationListViewWidgetTableComponent extends ConfirmationListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}