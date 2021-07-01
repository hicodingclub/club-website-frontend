import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { SnackBar, onServiceError } from "@hicoder/angular-core";
import { ModalConfig, Modal } from "@hicoder/angular-core";

import { SiteService } from "../../websites/site/site.service";

@Component({
  selector: "app-site-upload",
  templateUrl: "./site-upload.component.html",
  styleUrls: ["./site-upload.component.css"],
})
export class SiteUploadComponent implements OnInit {
  public name: string = "your_website_name";

  public site: any;
  public oldProjectFile: string;
  public newProjectFile: string;
  public step: number = 1;
  public finishedStep: number = 1;
  public errorMsg: string;
  public generating: boolean;

  constructor(private router: Router, private siteSvc: SiteService) {
    this.siteSvc.getListWithCondition(1, 25).subscribe(
      (result: any) => {
        if (result && result.items && result.items.length > 0) {
          this.site = result.items[0];
          if (this.site.projectFile) {
            let arr = this.site.projectFile.split("/");
            this.oldProjectFile = arr[arr.length - 1];
          }
          this.name = this.site.name;
          this.step = 2;
        } else {
          this.site = {};
        }
      },
      (error) => {
        onServiceError(error);
        this.site = {};
      }
    );
  }

  ngOnInit() {}

  onEnterName() {
    this.errorMsg = "";
  }
  fileUploaded(uploaded: string) {
    this.newProjectFile = uploaded;
  }

  goToStep(step: number) {
    if (step > this.finishedStep) return;
    this.step = step;
  }
  finishStep(step: number) {
    if (step > this.finishedStep) this.finishedStep = step;
    this.step = step;

    if (step == 3) {
      this.updateProjectFile();
    }
  }
  done() {
    this.router.navigateByUrl('websites/cust/sites');
  }
  submitName() {
    if (this.name === "your_website_name") {
      this.errorMsg =
        "The website name you enterned has been used. Please enter another one.";
      return;
    }
    const modalConfig: ModalConfig = {
      title: "Confirmation",
      content: `Are you sure you want to use "${this.name}" as your website name? You CANNOT change it after you confirm.`,
      // list of button text
      buttons: ["Confirm", "Cancel"],
      // list of button returns when clicked
      returns: [true, false],
      callBack: (result: boolean) => {
        if (result) {
          this.createSite();
        }
      },
    };
    const modal = new Modal(modalConfig);
    modal.show();
  }

  createSite() {
    this.errorMsg = "";
    const site = { name: this.name };
    this.siteSvc.createOne(site).subscribe(
      (result) => {
        this.site = result;
        this.finishedStep = 2;
      },
      (error) => {
        if (error && error.serverError) {
          let err = error.serverError.error;
          if (err && err.startsWith("E11000 duplicate key error")) {
            if (err.indexOf("site.$name") > 0) {
              this.errorMsg =
                "The website name you enterned has been used. Please enter another one.";
              return;
            }
            if (err.indexOf("site.$muser") > 0) {
              this.errorMsg =
                "You have created your website. Redirecting to site information page...";
              setTimeout(() => {
                this.router.navigateByUrl("/websites/cust/sites");
              }, 5000);
              return;
            }
          }
        }
        onServiceError(error);
      }
    );
  }

  updateProjectFile() {
    this.errorMsg = "";
    if (this.newProjectFile) {
      this.site.projectFile = this.newProjectFile;
          // site projectFile has been set in step 2
      this.siteSvc.updateOne(this.site['_id'], this.site).subscribe(
      (result) => {
        this.newProjectFile = ''; // reset because the file has been uploaded.
        this.generating = true;
        this.generateSite();
      },
      (error) => {
        onServiceError(error);
      });
    } else if (!this.site.ready) {
      this.generating = true;
      // this.generateSite();
    }
  }
  generateSite() {
    this.siteSvc.callZInterface('put', 'generate', {}).subscribe(
      () => {},
      (error) => { onServiceError(error); },
    )
  }
}
