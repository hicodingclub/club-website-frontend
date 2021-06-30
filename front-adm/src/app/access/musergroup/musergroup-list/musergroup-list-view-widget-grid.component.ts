import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MusergroupListViewComponent
} from './musergroup-list-view.component';
@Component({
  selector: 'app-musergroup-list-view-widget-grid',
  templateUrl: './musergroup-list-view-widget-grid.component.html',
  styleUrls: ['./musergroup-list-view-widget-grid.component.css'],
})
export class MusergroupListViewWidgetGridComponent extends MusergroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}