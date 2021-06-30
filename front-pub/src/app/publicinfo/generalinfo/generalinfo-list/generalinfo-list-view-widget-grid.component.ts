import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  GeneralinfoListViewComponent
} from './generalinfo-list-view.component';
@Component({
  selector: 'app-generalinfo-list-view-widget-grid',
  templateUrl: './generalinfo-list-view-widget-grid.component.html',
  styleUrls: ['./generalinfo-list-view-widget-grid.component.css'],
})
export class GeneralinfoListViewWidgetGridComponent extends GeneralinfoListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}