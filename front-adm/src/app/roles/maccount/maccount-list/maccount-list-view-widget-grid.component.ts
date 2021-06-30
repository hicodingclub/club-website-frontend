import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MaccountListViewComponent
} from './maccount-list-view.component';
@Component({
  selector: 'app-maccount-list-view-widget-grid',
  templateUrl: './maccount-list-view-widget-grid.component.html',
  styleUrls: ['./maccount-list-view-widget-grid.component.css'],
})
export class MaccountListViewWidgetGridComponent extends MaccountListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}