import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubmoduleListViewComponent
} from './mpubmodule-list-view.component';
@Component({
  selector: 'app-mpubmodule-list-view-widget-table',
  templateUrl: './mpubmodule-list-view-widget-table.component.html',
  styleUrls: ['./mpubmodule-list-view-widget-table.component.css'],
})
export class MpubmoduleListViewWidgetTableComponent extends MpubmoduleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}