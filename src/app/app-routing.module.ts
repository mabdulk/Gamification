import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamManageComponent } from './team-manage/team-manage.component';

const routes: Routes = [
  { path: '', component: MainPageComponent, data: { title: 'First Component' } },
  { path: 'profile', component: ViewProfileComponent, data: { title: 'Profile Component' } },
  { path: 'team-details/:teamName', component: TeamDetailComponent, data: { title: 'Team detail Component' } },
  { path: 'team-manage', component: TeamManageComponent, data: { title: 'Team manage Component' } }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
