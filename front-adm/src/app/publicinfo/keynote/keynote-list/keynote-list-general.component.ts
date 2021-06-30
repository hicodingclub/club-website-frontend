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
  KeynoteListComponent
} from './keynote-list.component';
import {
  KeynoteService
} from '../keynote.service';
@Component({
  selector: 'app-keynote-list-general',
  templateUrl: './keynote-list-general.component.html',
  styleUrls: ['./keynote-list.component.css', './keynote-list-general.component.css']
})
export class KeynoteListGeneralComponent extends KeynoteListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public keynoteService: KeynoteService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(keynoteService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}