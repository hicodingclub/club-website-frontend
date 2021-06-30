import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpubmoduleListViewComponent
} from './mpubmodule-list-view.component';
@Component({
  selector: 'app-mpubmodule-list-view-widget-grid',
  templateUrl: './mpubmodule-list-view-widget-grid.component.html',
  styleUrls: ['./mpubmodule-list-view-widget-grid.component.css'],
})
export class MpubmoduleListViewWidgetGridComponent extends MpubmoduleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}