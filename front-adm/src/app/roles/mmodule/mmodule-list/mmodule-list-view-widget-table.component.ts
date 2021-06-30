import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MmoduleListViewComponent
} from './mmodule-list-view.component';
@Component({
  selector: 'app-mmodule-list-view-widget-table',
  templateUrl: './mmodule-list-view-widget-table.component.html',
  styleUrls: ['./mmodule-list-view-widget-table.component.css'],
})
export class MmoduleListViewWidgetTableComponent extends MmoduleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}