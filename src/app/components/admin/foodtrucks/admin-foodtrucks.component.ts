import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../../../model/foodtruck';
import { FoodtruckService } from '../../../services/foodtruck.service';

@Component({
  selector: 'app-admin-foodtrucks',
  templateUrl: 'admin-foodtrucks.component.html',
  styleUrls: ['admin-foodtrucks.component.css']
})

export class AdminFoodtrucksComponent implements OnInit {

  foodtrucks : Foodtruck[];

  constructor(private foodtruckService:FoodtruckService) { }

  ngOnInit() {
    this.getFoodtrucks();
  }

  getFoodtrucks() : void {
    this.foodtruckService.getFoodtrucks().then((fs: Foodtruck[]) => {
      this.foodtrucks = fs;
    });
  }
}
