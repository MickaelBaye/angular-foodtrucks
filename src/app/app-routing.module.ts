import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodtrucksComponent }  from './components/foodtrucks/foodtrucks.component';
import { HomeComponent } from './components/home/home.component';
import { FoodtruckDetailComponent } from './components/foodtruck-detail/foodtruck-detail.component';
import { TodayComponent } from './components/today/today.component';
import { WeekComponent } from './components/week/week.component';
import { CommentsComponent } from './components/comments/comments.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/home', pathMatch: 'full' },
  { path: 'app/foodtrucks', component: FoodtrucksComponent },
  { path: 'app/foodtruck/:id', component: FoodtruckDetailComponent },
  { path: 'app/home', component: HomeComponent },
  { path: 'app/today', component: TodayComponent },
  { path: 'app/day/:id', component: WeekComponent },
  { path: 'app/comments', component: CommentsComponent },
  { path: 'app/admin', component: AdminComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
