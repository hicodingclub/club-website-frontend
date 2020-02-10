import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MddsBaseComponent, ViewType } from '@hicoder/angular-core';
import { Injector } from '@angular/core';
import { PageService } from './page.service';

const itemCamelName = 'page';

export { ViewType };




export class PageComponent extends MddsBaseComponent {



    constructor(
      
      public pageService: PageService,
      public injector: Injector,
      public router: Router,
      public route: ActivatedRoute,
      public location: Location,
      public view: ViewType ) {

        super(pageService, injector, router, route, location, view, itemCamelName);

        
        this.briefFieldsInfo = [];
        this.briefFieldsInfo.push(['description', 'Description']);this.briefFieldsInfo.push(['createdAt', 'Created at']);this.briefFieldsInfo.push(['updatedAt', 'Updated at']);this.briefFieldsInfo.push(['tag', 'Tag']);



        this.requiredFields = ['description','content',];


        this.schemaName = 'page';
        this.dateFormat = 'MM-DD-YYYY';
        this.timeFormat = 'hh:mm:ss';
        this.modulePath = 'publicinfo';
        this.indexFields = ['description', ];
    }
}
