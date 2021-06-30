import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MpermissionListViewComponent
} from './mpermission-list-view.component';
@Component({
  selector: 'app-mpermission-list-view-widget-table',
  templateUrl: './mpermission-list-view-widget-table.component.html',
  styleUrls: ['./mpermission-list-view-widget-table.component.css'],
})
export class MpermissionListViewWidgetTableComponent extends MpermissionListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}