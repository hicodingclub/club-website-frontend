import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MmoduleListViewComponent
} from './mmodule-list-view.component';
@Component({
  selector: 'app-mmodule-list-view-widget-grid',
  templateUrl: './mmodule-list-view-widget-grid.component.html',
  styleUrls: ['./mmodule-list-view-widget-grid.component.css'],
})
export class MmoduleListViewWidgetGridComponent extends MmoduleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}