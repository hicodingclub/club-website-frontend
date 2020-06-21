import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmationService } from '../../../summerprogram/confirmation/confirmation.service';
import { SpenrollmentService } from '../../../summerprogram/spenrollment/spenrollment.service';
import { SnackBar, onServiceError } from '@hicoder/angular-core';

@Component({
  selector: 'app-sp-confirmation',
  templateUrl: './sp-confirmation.component.html',
  styleUrls: ['./sp-confirmation.component.css']
})
export class SPConformationComponent implements OnInit {
  public conformationType: string = 'not defined';
  public userSelection: string = undefined;
  private spenrollment: string;
  private mddsEmailToken: string;
  private confirmID: string;

  public loading: boolean = true;
  public requestValid: boolean = true;
  public name: string;

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private confSvc: ConfirmationService,
    private enrSvc: SpenrollmentService,
  ) {}

  ngOnInit() {
    this.conformationType = this.route.snapshot.queryParamMap.get('type');
    this.spenrollment = this.route.snapshot.queryParamMap.get('e');
    this.mddsEmailToken = this.route.snapshot.queryParamMap.get('t');

    if (!this.conformationType || !this.spenrollment || !this.mddsEmailToken) {
      this.requestValid = false;
      return;
    }

    this.enrSvc.getDetail(this.spenrollment).subscribe(
      (result) => {
        if (!result) {
          this.requestValid = false;
          this.loading = false;
          return;
        }
        this.name = result.name;
        this.createConfirm(result.name, result.email);
      },
      (error) => {
        this.loading = false;
        this.requestValid = false;
        console.error(error);
      }
    );
  }
  createConfirm(name: string, email: string) {
    this.confSvc.createOne({
      mddsEmailToken: this.mddsEmailToken,
      enrollment: {_id: this.spenrollment},
      type: this.conformationType,
      email: email,
      name: name,
      confirmed: -1,
    }).subscribe(
      (result) => {
        this.loading = false;
        this.confirmID = result._id;
      },
      (error) => {
        this.loading = false;
        this.requestValid = false;
        console.error(error);
      }
    )
  }
  onSubmit() {
    let num = this.userSelection === 'Yes' ? 1 : 0;
    this.confSvc.updateOne(this.confirmID, {
      _id: this.confirmID,
      confirmed: num,
    }).subscribe(
      (result) => {
        new SnackBar({
          content: "Confirmation Submitted!",
        }).show();
        this.router.navigateByUrl('/'); // go to home
      },
      onServiceError
    );
  }
}
