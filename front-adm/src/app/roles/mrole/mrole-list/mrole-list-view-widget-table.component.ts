import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MroleListViewComponent
} from './mrole-list-view.component';
@Component({
  selector: 'app-mrole-list-view-widget-table',
  templateUrl: './mrole-list-view-widget-table.component.html',
  styleUrls: ['./mrole-list-view-widget-table.component.css'],
})
export class MroleListViewWidgetTableComponent extends MroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}