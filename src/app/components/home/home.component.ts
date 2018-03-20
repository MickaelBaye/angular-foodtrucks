import { Component, OnInit } from '@angular/core';
import { Foodtruck } from '../../model/foodtruck';
import { FoodtruckService } from '../../services/foodtruck.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {

  foodtrucks : Foodtruck[] = [];

  constructor(private foodtruckService : FoodtruckService) { }

  ngOnInit() {
    this.getFoodtrucks();
  }

  getFoodtrucks() : void {
    // this.foodtruckService.getFoodtrucks().subscribe(FOODTRUCKS => this.foodtrucks = FOODTRUCKS);
    this.foodtruckService.getFoodtrucks().then((fs: Foodtruck[]) => {
      this.foodtrucks = fs;
    });
  }
}
