import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EmailsettingsListViewComponent
} from './emailsettings-list-view.component';
@Component({
  selector: 'app-emailsettings-list-view-widget-grid',
  templateUrl: './emailsettings-list-view-widget-grid.component.html',
  styleUrls: ['./emailsettings-list-view-widget-grid.component.css'],
})
export class EmailsettingsListViewWidgetGridComponent extends EmailsettingsListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}