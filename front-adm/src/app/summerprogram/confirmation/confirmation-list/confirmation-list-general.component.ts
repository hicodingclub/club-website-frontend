import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Location
} from '@angular/common';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  Injector
} from '@angular/core';
import {
  ConfirmationListComponent
} from './confirmation-list.component';
import {
  ConfirmationService
} from '../confirmation.service';
@Component({
  selector: 'app-confirmation-list-general',
  templateUrl: './confirmation-list-general.component.html',
  styleUrls: ['./confirmation-list.component.css', './confirmation-list-general.component.css']
})
export class ConfirmationListGeneralComponent extends ConfirmationListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = false;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public confirmationService: ConfirmationService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(confirmationService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}