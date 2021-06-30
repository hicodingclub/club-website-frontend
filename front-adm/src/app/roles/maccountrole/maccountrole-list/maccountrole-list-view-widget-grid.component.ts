import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MaccountroleListViewComponent
} from './maccountrole-list-view.component';
@Component({
  selector: 'app-maccountrole-list-view-widget-grid',
  templateUrl: './maccountrole-list-view-widget-grid.component.html',
  styleUrls: ['./maccountrole-list-view-widget-grid.component.css'],
})
export class MaccountroleListViewWidgetGridComponent extends MaccountroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}