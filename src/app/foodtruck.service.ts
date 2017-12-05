import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Foodtruck } from './foodtruck';
import { FOODTRUCKS } from './mock-foodtrucks';

@Injectable()
export class FoodtruckService {

  constructor() { }

  getFoodtrucks(): Observable<Foodtruck[]> {
    return of(FOODTRUCKS);
  }

  getFoodtruck(id: number): Observable<Foodtruck> {
    return of(FOODTRUCKS.find(foodtruck => foodtruck.id === id));
  }
}
