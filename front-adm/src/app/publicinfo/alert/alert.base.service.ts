import { HttpClient } from '@angular/common/http';
import { MddsBaseService } from '@hicoder/angular-core';

const servicePath = '/alert/';

export class AlertBaseService extends MddsBaseService {
    constructor(http: HttpClient, serverRootUrl: string) {
        const serviceUrl = serverRootUrl + servicePath;
        super(http, serviceUrl);
    }
}
