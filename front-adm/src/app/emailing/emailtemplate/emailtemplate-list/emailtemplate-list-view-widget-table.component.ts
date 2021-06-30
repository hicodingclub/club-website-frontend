import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EmailtemplateListViewComponent
} from './emailtemplate-list-view.component';
@Component({
  selector: 'app-emailtemplate-list-view-widget-table',
  templateUrl: './emailtemplate-list-view-widget-table.component.html',
  styleUrls: ['./emailtemplate-list-view-widget-table.component.css'],
})
export class EmailtemplateListViewWidgetTableComponent extends EmailtemplateListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}