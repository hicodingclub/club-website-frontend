import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MfileListViewComponent
} from './mfile-list-view.component';
@Component({
  selector: 'app-mfile-list-view-widget-grid',
  templateUrl: './mfile-list-view-widget-grid.component.html',
  styleUrls: ['./mfile-list-view-widget-grid.component.css'],
})
export class MfileListViewWidgetGridComponent extends MfileListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}