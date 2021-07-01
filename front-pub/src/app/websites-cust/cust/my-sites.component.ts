import { Component, OnInit } from '@angular/core';

import { SnackBar, onServiceError } from '@hicoder/angular-core';

import { SiteService } from '../../websites/site/site.service';
@Component({
  selector: 'app-my-sites',
  templateUrl: './my-sites.component.html',
  styleUrls: ['./my-sites.component.css']
})
export class MySitesComponent implements OnInit {
  public name: string;
  public site: any;
  constructor(private siteSvc: SiteService) {
    this.siteSvc.getListWithCondition(1, 25).subscribe(
      (result: any) => {
        if (result && result.items && result.items.length > 0) {
          this.site = result.items[0];
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

  ngOnInit() {
  }

  changeStatus() {}
}
