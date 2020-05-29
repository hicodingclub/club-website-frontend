import { Injectable, Inject, OnDestroy, SkipSelf } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TutorBaseService } from './tutor.base.service';
import { Teachforlife_SERVER_ROOT_URI } from '../teachforlife.tokens';

@Injectable()
export class TutorService extends TutorBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Teachforlife_SERVER_ROOT_URI) private teachforlifeServerRootUri: string) {
        super(http, teachforlifeServerRootUri);
    }
    ngOnDestroy() { }
}
