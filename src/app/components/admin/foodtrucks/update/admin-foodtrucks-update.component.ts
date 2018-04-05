import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Foodtruck } from '../../../../model/foodtruck';
import { FoodtruckService } from '../../../../services/foodtruck.service';

@Component({
  selector: 'app-admin-foodtrucks-update',
  templateUrl: 'admin-foodtrucks-update.component.html',
  styleUrls: ['admin-foodtrucks-update.component.css']
})

export class AdminFoodtrucksUpdateComponent implements OnInit {

  foodtruck: Foodtruck;
  week = [1, 2, 3, 4, 5];

  constructor(
    private route: ActivatedRoute,
    private foodtruckService: FoodtruckService) { }

  ngOnInit() {
    this.getFoodtruck();
  }

  getFoodtruck(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.foodtruckService.getFoodtruck(id).then((f: Foodtruck) => {
      this.foodtruck = f;
    });
  }

}
