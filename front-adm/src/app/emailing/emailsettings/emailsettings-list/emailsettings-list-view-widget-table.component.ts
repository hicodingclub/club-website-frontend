import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EmailsettingsListViewComponent
} from './emailsettings-list-view.component';
@Component({
  selector: 'app-emailsettings-list-view-widget-table',
  templateUrl: './emailsettings-list-view-widget-table.component.html',
  styleUrls: ['./emailsettings-list-view-widget-table.component.css'],
})
export class EmailsettingsListViewWidgetTableComponent extends EmailsettingsListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}