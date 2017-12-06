import { Component } from '@angular/core';
import { Foodtruck } from './foodtruck';
import { FoodtruckService } from './foodtruck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Foodtrucks';
  week = [1, 2, 3, 4, 5];

  foodtrucks: Foodtruck[];

  constructor(private foodtruckService:FoodtruckService) {}

  ngOnInit() {
    this.getFoodtrucks();
  }

  getFoodtrucks() : void {
    this.foodtruckService.getFoodtrucks().subscribe(FOODTRUCKS => this.foodtrucks = FOODTRUCKS);
  }
}
