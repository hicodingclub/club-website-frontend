import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  Directive,
  EventEmitter,
} from "@angular/core";
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from "@angular/router";
import { Injector } from "@angular/core";

import { SpenrollmentEditComponent } from "../../../summerprogram/spenrollment/spenrollment-edit/spenrollment-edit.component";
import { SpenrollmentService } from "../../../summerprogram/spenrollment/spenrollment.service";
import { ComponentFactoryResolver } from "@angular/core";

@Component({
  selector: "app-spenroll-embedded",
  templateUrl:
    "../../../summerprogram/spenrollment/spenrollment-edit/spenrollment-edit.component.html",
  styleUrls: [
    "../../../summerprogram/spenrollment/spenrollment-edit/spenrollment-edit.component.css",
  ],
})
export class SPEnrollComponent extends SpenrollmentEditComponent implements OnInit {

  constructor(
    public spenrollmentService: SpenrollmentService,
    public injector: Injector,
    public router: Router,
    public route: ActivatedRoute,
    public location: Location
  ) {
    super(
      spenrollmentService,
      injector,
      router,
      route,
      location
    );

    this.embeddedView = true; // change to an embedded view so we can receive emit
    this.embedMode == "create";

    // now subscribe to the edit submit event
    this.done.subscribe((val: boolean) => {
      if (val) {
        this.router.navigate(["/summerprogram/cust/home"]);
      } else {
        this.goBack();
      }
    });
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
