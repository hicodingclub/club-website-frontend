import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MfilegroupListViewComponent
} from './mfilegroup-list-view.component';
@Component({
  selector: 'app-mfilegroup-list-view-widget-table',
  templateUrl: './mfilegroup-list-view-widget-table.component.html',
  styleUrls: ['./mfilegroup-list-view-widget-table.component.css'],
})
export class MfilegroupListViewWidgetTableComponent extends MfilegroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}