import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpermissionListViewComponent
} from './mpermission-list-view.component';
@Component({
  selector: 'app-mpermission-list-view-widget-grid',
  templateUrl: './mpermission-list-view-widget-grid.component.html',
  styleUrls: ['./mpermission-list-view-widget-grid.component.css'],
})
export class MpermissionListViewWidgetGridComponent extends MpermissionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}