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
  SpenrollmentBaseService
} from './spenrollment.base.service';
import {
  Summerprogram_SERVER_ROOT_URI
} from '../summerprogram.tokens';
@Injectable({
  providedIn: 'root',
})
export class SpenrollmentService extends SpenrollmentBaseService implements OnDestroy {
  constructor(http: HttpClient, @Inject(Summerprogram_SERVER_ROOT_URI) private summerprogramServerRootUri: string) {
    super(http, summerprogramServerRootUri);
  }
  ngOnDestroy() {}
}