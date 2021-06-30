import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MusergroupListViewComponent
} from './musergroup-list-view.component';
@Component({
  selector: 'app-musergroup-list-view-widget-table',
  templateUrl: './musergroup-list-view-widget-table.component.html',
  styleUrls: ['./musergroup-list-view-widget-table.component.css'],
})
export class MusergroupListViewWidgetTableComponent extends MusergroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}