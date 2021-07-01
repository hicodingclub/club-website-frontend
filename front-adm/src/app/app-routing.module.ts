import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@hicoder/angular-auth';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home',  component: HomeComponent, canActivate: [AuthGuard] },

  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
  { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
  { path: 'emailing', loadChildren: () => import('./emailing/emailing.module').then(m => m.EmailingModule) },
  { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule) },

  { path: 'publicinfo', loadChildren: () => import('./publicinfo/publicinfo.module').then(m => m.PublicinfoModule) },
  { path: 'teachforlife', loadChildren: () => import('./teachforlife/teachforlife.module').then(m => m.TeachforlifeModule) },
  { path: 'summerprogram', loadChildren: () => import('./summerprogram/summerprogram.module').then(m => m.SummerprogramModule) },
  { path: 'websites', loadChildren: () => import('./websites/websites.module').then(m => m.WebsitesModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
