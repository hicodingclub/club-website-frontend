import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  TutorListViewComponent
} from './tutor-list-view.component';
@Component({
  selector: 'app-tutor-list-view-widget-grid',
  templateUrl: './tutor-list-view-widget-grid.component.html',
  styleUrls: ['./tutor-list-view-widget-grid.component.css'],
})
export class TutorListViewWidgetGridComponent extends TutorListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}