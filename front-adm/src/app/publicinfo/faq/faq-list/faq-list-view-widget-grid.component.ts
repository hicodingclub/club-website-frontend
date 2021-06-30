import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  FaqListViewComponent
} from './faq-list-view.component';
@Component({
  selector: 'app-faq-list-view-widget-grid',
  templateUrl: './faq-list-view-widget-grid.component.html',
  styleUrls: ['./faq-list-view-widget-grid.component.css'],
})
export class FaqListViewWidgetGridComponent extends FaqListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}