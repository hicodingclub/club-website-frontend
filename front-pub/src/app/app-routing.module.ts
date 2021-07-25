import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { MembersComponent } from './pages/members/members.component';

const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'contact', component: ContactComponent},
    { path: 'about', component: AboutComponent},
    { path: 'members', component: MembersComponent},
    { path: 'teachforlife', loadChildren: () => import('./teachforlife/teachforlife.module').then(m => m.TeachforlifeModule) },
    { path: 'summerprogram', loadChildren: () => import('./summerprogram/summerprogram.module').then(m => m.SummerprogramModule) },
    { path: 'websites', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
