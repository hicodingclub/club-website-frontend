import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MembersComponent } from './members/members.component';
import { Teach4lifeComponent } from './teach4life/teach4life.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'members', component: MembersComponent},
    { path: 'teach4life', component: Teach4lifeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
