import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  SpenrollmentListViewComponent
} from './spenrollment-list-view.component';
@Component({
  selector: 'app-spenrollment-list-view-widget-grid',
  templateUrl: './spenrollment-list-view-widget-grid.component.html',
  styleUrls: ['./spenrollment-list-view-widget-grid.component.css'],
})
export class SpenrollmentListViewWidgetGridComponent extends SpenrollmentListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}