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
  TutorListComponent
} from './tutor-list.component';
import {
  TutorService
} from '../tutor.service';
@Component({
  selector: 'app-tutor-list-general',
  templateUrl: './tutor-list-general.component.html',
  styleUrls: ['./tutor-list.component.css', './tutor-list-general.component.css']
})
export class TutorListGeneralComponent extends TutorListComponent implements OnInit {
  public clickItemAction: string = 'detail';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = true;
  public canUpdate: boolean = true;
  public canDelete: boolean = true;
  public canArchive: boolean = true;
  public canCheck: boolean = true;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public tutorService: TutorService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(tutorService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}