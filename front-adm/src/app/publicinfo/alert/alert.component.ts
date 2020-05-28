import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { AlertService } from './alert.service';

const itemCamelName = 'alert';

export { ViewType };




export class AlertComponent extends MddsBaseComponent {



    constructor(
      
      public alertService: AlertService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(alertService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['name', 'Name']);this.briefFieldsInfo.push(['show', 'Show']);this.briefFieldsInfo.push(['order', 'Order']);



        this.requiredFields = ['name','description','order',];


        this.schemaName = 'alert';
        
        this.modulePath = 'publicinfo';
        this.indexFields = ['name', ];
    }
}
