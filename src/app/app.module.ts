import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { FoodtrucksComponent }  from './foodtrucks/foodtrucks.component';
import { FoodtruckService }     from './foodtruck.service';
import { HomeComponent }        from './home/home.component';
import { FoodtruckDetailComponent } from './foodtruck-detail/foodtruck-detail.component';
import { MomentModule }         from 'angular2-moment';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule
  ],
  declarations: [
    AppComponent,
    FoodtrucksComponent,
    HomeComponent,
    FoodtruckDetailComponent,
    TodayComponent,
    WeekComponent
  ],
  providers: [ FoodtruckService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
