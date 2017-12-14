import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
// Moment
import { MomentModule }         from 'angular2-moment';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
// Foodtrucks
import { FoodtrucksComponent }  from './foodtrucks/foodtrucks.component';
import { FoodtruckService }     from './foodtruck.service';
import { HomeComponent }        from './home/home.component';
import { FoodtruckDetailComponent } from './foodtruck-detail/foodtruck-detail.component';
import { TodayComponent } from './today/today.component';
import { WeekComponent } from './week/week.component';
import { Foodtruck } from './foodtruck';
import { FooterComponent } from './footer/footer.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    FoodtrucksComponent,
    HomeComponent,
    FoodtruckDetailComponent,
    TodayComponent,
    WeekComponent,
    FooterComponent,
    CommentsComponent
  ],
  providers: [ AngularFireAuth, FoodtruckService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
