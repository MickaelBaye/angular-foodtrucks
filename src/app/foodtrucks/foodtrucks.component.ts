import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../foodtruck';
import { FoodtruckService } from '../foodtruck.service';
import { FOODTRUCKS } from '../mock-foodtrucks';

@Component({
  selector: 'foodtrucks',
  templateUrl: 'foodtrucks.component.html',
  styleUrls: [ 'foodtrucks.component.css' ]
})
export class FoodtrucksComponent implements OnInit {

  foodtrucks : Foodtruck[];

  constructor(private foodtruckService:FoodtruckService) {}

  ngOnInit() {
    this.getFoodtrucks();
  }

  getFoodtrucks() : void {
    this.foodtruckService.getFoodtrucks().subscribe(FOODTRUCKS => this.foodtrucks = FOODTRUCKS);
  }
}
