import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MfileListViewComponent
} from './mfile-list-view.component';
@Component({
  selector: 'app-mfile-list-view-widget-table',
  templateUrl: './mfile-list-view-widget-table.component.html',
  styleUrls: ['./mfile-list-view-widget-table.component.css'],
})
export class MfileListViewWidgetTableComponent extends MfileListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}