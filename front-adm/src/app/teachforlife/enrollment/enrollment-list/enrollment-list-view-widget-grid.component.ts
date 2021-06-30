import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EnrollmentListViewComponent
} from './enrollment-list-view.component';
@Component({
  selector: 'app-enrollment-list-view-widget-grid',
  templateUrl: './enrollment-list-view-widget-grid.component.html',
  styleUrls: ['./enrollment-list-view-widget-grid.component.css'],
})
export class EnrollmentListViewWidgetGridComponent extends EnrollmentListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}