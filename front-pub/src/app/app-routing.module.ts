import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
