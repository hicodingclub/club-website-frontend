import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  MfilegroupListViewComponent
} from './mfilegroup-list-view.component';
@Component({
  selector: 'app-mfilegroup-list-view-widget-grid',
  templateUrl: './mfilegroup-list-view-widget-grid.component.html',
  styleUrls: ['./mfilegroup-list-view-widget-grid.component.css'],
})
export class MfilegroupListViewWidgetGridComponent extends MfilegroupListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}