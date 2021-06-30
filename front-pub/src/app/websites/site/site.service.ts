import {
  Injectable,
  Inject,
  OnDestroy,
  SkipSelf
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import {
  SiteBaseService
} from './site.base.service';
import {
  Websites_SERVER_ROOT_URI
} from '../websites.tokens';
@Injectable({
  providedIn: 'root',
})
export class SiteService extends SiteBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Websites_SERVER_ROOT_URI) private websitesServerRootUri: string) {
    super(http, websitesServerRootUri);
  }
  ngOnDestroy() {}
}