import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MroleListViewComponent
} from './mrole-list-view.component';
@Component({
  selector: 'app-mrole-list-view-widget-grid',
  templateUrl: './mrole-list-view-widget-grid.component.html',
  styleUrls: ['./mrole-list-view-widget-grid.component.css'],
})
export class MroleListViewWidgetGridComponent extends MroleListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}