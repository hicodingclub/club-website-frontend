import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnrollmentBaseService } from './enrollment.base.service';
import { Summerprogram_SERVER_ROOT_URI } from '../summerprogram.tokens';

@Injectable()
export class EnrollmentService extends EnrollmentBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Summerprogram_SERVER_ROOT_URI) private summerprogramServerRootUri: string) {
        super(http, summerprogramServerRootUri);
    }
    ngOnDestroy() { }
}
