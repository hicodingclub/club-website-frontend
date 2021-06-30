import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EnrollmentListViewComponent
} from './enrollment-list-view.component';
@Component({
  selector: 'app-enrollment-list-view-widget-table',
  templateUrl: './enrollment-list-view-widget-table.component.html',
  styleUrls: ['./enrollment-list-view-widget-table.component.css'],
})
export class EnrollmentListViewWidgetTableComponent extends EnrollmentListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}