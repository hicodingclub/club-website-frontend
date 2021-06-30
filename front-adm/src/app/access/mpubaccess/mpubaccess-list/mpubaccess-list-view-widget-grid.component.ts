import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubaccessListViewComponent
} from './mpubaccess-list-view.component';
@Component({
  selector: 'app-mpubaccess-list-view-widget-grid',
  templateUrl: './mpubaccess-list-view-widget-grid.component.html',
  styleUrls: ['./mpubaccess-list-view-widget-grid.component.css'],
})
export class MpubaccessListViewWidgetGridComponent extends MpubaccessListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}