import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  FaqListViewComponent
} from './faq-list-view.component';
@Component({
  selector: 'app-faq-list-view-widget-table',
  templateUrl: './faq-list-view-widget-table.component.html',
  styleUrls: ['./faq-list-view-widget-table.component.css'],
})
export class FaqListViewWidgetTableComponent extends FaqListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}