import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReleasesComponent } from './releases/releases.component';
import { AddNewJobComponent } from './settings/add-new-job/add-new-job.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'add-new-job', component: AddNewJobComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
