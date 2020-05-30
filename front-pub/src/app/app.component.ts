import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AlertService } from './publicinfo/alert/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public alertItems: any[];
  public showAlert: boolean[];
  public currentUrl: string = '';

  constructor(private router: Router, private alertService: AlertService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects) {
          this.currentUrl = event.urlAfterRedirects;
        } else {
          this.currentUrl = event.url;
        }

        if ((<any>window).gtag) {
          (<any>window).gtag('config', 'UA-145853353-1', {'page_path': this.currentUrl});
        }
      }
    });

    alertService.getList(1, 5, {}, "order", "asc", undefined, false, false, undefined, undefined, false, false, undefined, undefined, undefined, {}, undefined).subscribe(
      (result: any) => {
        if(result.items){
          this.alertItems = result.items;
          let num = result.items.length;
          this.showAlert = [];
          for(let i = 0; i < num; i++) {
            this.showAlert.push(true);
        }
        }
        
      },
      (error: any) => {
        //ignore error
      },
    );
  }

  public hideAlert(id: number) {
    this.showAlert[id] = false;
  }

  public clickAlert(id: number) {
    this.showAlert[id] = false;
    let url = this.alertItems[id].linkURL;
    if(url.startsWith("http")){
      window.location.href = url;
    } else {
      this.router.navigate([url]);
    }
  }
}
