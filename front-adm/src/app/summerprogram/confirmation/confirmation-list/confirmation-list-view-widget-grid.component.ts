import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  ConfirmationListViewComponent
} from './confirmation-list-view.component';
@Component({
  selector: 'app-confirmation-list-view-widget-grid',
  templateUrl: './confirmation-list-view-widget-grid.component.html',
  styleUrls: ['./confirmation-list-view-widget-grid.component.css'],
})
export class ConfirmationListViewWidgetGridComponent extends ConfirmationListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}