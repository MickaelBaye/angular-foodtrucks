import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
import { FoodtrucksComponent }  from './components/foodtrucks/foodtrucks.component';
import { FoodtruckService }     from './services/foodtruck.service';
import { HomeComponent }        from './components/home/home.component';
import { FoodtruckDetailComponent } from './components/foodtruck-detail/foodtruck-detail.component';
import { TodayComponent } from './components/today/today.component';
import { WeekComponent } from './components/week/week.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommentsComponent } from './components/comments/comments.component';

import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    FoodtrucksComponent,
    HomeComponent,
    FoodtruckDetailComponent,
    TodayComponent,
    WeekComponent,
    FooterComponent,
    CommentsComponent,
    AdminComponent
  ],
  providers: [ AngularFireAuth, FoodtruckService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
