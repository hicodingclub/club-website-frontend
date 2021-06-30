import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EmailtemplateListViewComponent
} from './emailtemplate-list-view.component';
@Component({
  selector: 'app-emailtemplate-list-view-widget-grid',
  templateUrl: './emailtemplate-list-view-widget-grid.component.html',
  styleUrls: ['./emailtemplate-list-view-widget-grid.component.css'],
})
export class EmailtemplateListViewWidgetGridComponent extends EmailtemplateListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}