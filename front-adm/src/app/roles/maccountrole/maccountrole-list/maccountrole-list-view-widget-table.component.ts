import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MaccountroleListViewComponent
} from './maccountrole-list-view.component';
@Component({
  selector: 'app-maccountrole-list-view-widget-table',
  templateUrl: './maccountrole-list-view-widget-table.component.html',
  styleUrls: ['./maccountrole-list-view-widget-table.component.css'],
})
export class MaccountroleListViewWidgetTableComponent extends MaccountroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}