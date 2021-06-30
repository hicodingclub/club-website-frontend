import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  TutorListViewComponent
} from './tutor-list-view.component';
@Component({
  selector: 'app-tutor-list-view-widget-table',
  templateUrl: './tutor-list-view-widget-table.component.html',
  styleUrls: ['./tutor-list-view-widget-table.component.css'],
})
export class TutorListViewWidgetTableComponent extends TutorListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}