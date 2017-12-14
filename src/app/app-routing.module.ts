import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodtrucksComponent }  from './foodtrucks/foodtrucks.component';
import { HomeComponent } from './home/home.component';
import { FoodtruckDetailComponent } from './foodtruck-detail/foodtruck-detail.component';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'foodtrucks', component: FoodtrucksComponent },
  { path: 'foodtruck/:id', component: FoodtruckDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'today', component: TodayComponent },
  { path: 'day/:id', component: WeekComponent },
  { path: 'comments', component: CommentsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
