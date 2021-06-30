import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  GeneralinfoListViewComponent
} from './generalinfo-list-view.component';
@Component({
  selector: 'app-generalinfo-list-view-widget-table',
  templateUrl: './generalinfo-list-view-widget-table.component.html',
  styleUrls: ['./generalinfo-list-view-widget-table.component.css'],
})
export class GeneralinfoListViewWidgetTableComponent extends GeneralinfoListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}