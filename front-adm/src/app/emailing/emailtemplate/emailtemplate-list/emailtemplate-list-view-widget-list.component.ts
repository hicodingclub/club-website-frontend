import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  EmailtemplateListViewComponent
} from './emailtemplate-list-view.component';
@Component({
  selector: 'app-emailtemplate-list-view-widget-list',
  animations: [
    trigger('inOutAnimation',
      [
        transition(':enter',
          [
            style({
              opacity: 0
            }),
            animate('1s ease-out', style({
              opacity: 1
            }))
          ]),
        transition(':leave',
          [
            style({
              opacity: 1
            }),
            animate('0.5s ease-in', style({
              opacity: 0
            }))
          ])
      ])
  ],
  templateUrl: './emailtemplate-list-view-widget-list.component.html',
  styleUrls: ['./emailtemplate-list-view-widget-list.component.css'],
})
export class EmailtemplateListViewWidgetListComponent extends EmailtemplateListViewComponent implements OnInit {
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
  }
}