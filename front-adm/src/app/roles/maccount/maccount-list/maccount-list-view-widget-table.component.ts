import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MaccountListViewComponent
} from './maccount-list-view.component';
@Component({
  selector: 'app-maccount-list-view-widget-table',
  templateUrl: './maccount-list-view-widget-table.component.html',
  styleUrls: ['./maccount-list-view-widget-table.component.css'],
})
export class MaccountListViewWidgetTableComponent extends MaccountListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}