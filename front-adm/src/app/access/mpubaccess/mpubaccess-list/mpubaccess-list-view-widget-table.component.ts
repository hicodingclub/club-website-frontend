import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubaccessListViewComponent
} from './mpubaccess-list-view.component';
@Component({
  selector: 'app-mpubaccess-list-view-widget-table',
  templateUrl: './mpubaccess-list-view-widget-table.component.html',
  styleUrls: ['./mpubaccess-list-view-widget-table.component.css'],
})
export class MpubaccessListViewWidgetTableComponent extends MpubaccessListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}