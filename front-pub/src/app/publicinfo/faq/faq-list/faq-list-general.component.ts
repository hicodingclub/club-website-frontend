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
  FaqListComponent
} from './faq-list.component';
import {
  FaqService
} from '../faq.service';
@Component({
  selector: 'app-faq-list-general',
  templateUrl: './faq-list-general.component.html',
  styleUrls: ['./faq-list.component.css', './faq-list-general.component.css']
})
export class FaqListGeneralComponent extends FaqListComponent implements OnInit {
  public clickItemAction: string = '';
  public cardHasLink: boolean = false;
  public cardHasSelect: boolean = false;
  public includeSubDetail: boolean = false;
  public canUpdate: boolean = false;
  public canDelete: boolean = false;
  public canArchive: boolean = false;
  public canCheck: boolean = false;
  public itemMultiSelect: boolean = true;
  public majorUi: boolean = true;
  constructor(public faqService: FaqService, public injector: Injector, public router: Router, public route: ActivatedRoute, public location: Location) {
    super(faqService, injector, router, route, location);
    this.listViews = ['list', 'grid', 'table', ];
    this.listViewFilter = 'list';
  }
  ngOnInit() {
    super.ngOnInit();
  }
}