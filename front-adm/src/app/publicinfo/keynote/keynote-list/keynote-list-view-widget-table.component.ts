import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  KeynoteListViewComponent
} from './keynote-list-view.component';
@Component({
  selector: 'app-keynote-list-view-widget-table',
  templateUrl: './keynote-list-view-widget-table.component.html',
  styleUrls: ['./keynote-list-view-widget-table.component.css'],
})
export class KeynoteListViewWidgetTableComponent extends KeynoteListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}