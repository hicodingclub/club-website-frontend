import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  KeynoteListViewComponent
} from './keynote-list-view.component';
@Component({
  selector: 'app-keynote-list-view-widget-grid',
  templateUrl: './keynote-list-view-widget-grid.component.html',
  styleUrls: ['./keynote-list-view-widget-grid.component.css'],
})
export class KeynoteListViewWidgetGridComponent extends KeynoteListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}