import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  SpenrollmentListViewComponent
} from './spenrollment-list-view.component';
@Component({
  selector: 'app-spenrollment-list-view-widget-table',
  templateUrl: './spenrollment-list-view-widget-table.component.html',
  styleUrls: ['./spenrollment-list-view-widget-table.component.css'],
})
export class SpenrollmentListViewWidgetTableComponent extends SpenrollmentListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}